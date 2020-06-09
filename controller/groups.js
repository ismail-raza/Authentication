const defaultResponse = require('../utils/defaultResponse');
const constants = require('../utils/constants');
const responseCodes = require('../utils/responseCodes');

exports.create = async (req, res) => {
    try {
        let requestBody = req.body != null ? req.body : defaultResponse().error({message: constants.INVALID_BODY}, res, errorCode.INVALID_BODY);
        req.checkBody('name', "Please provide name.").notEmpty();
        req.checkBody('description', "Please provide description.").notEmpty();
        let group = new req.models.Groups(requestBody);
        await group.save();
        if (group) defaultResponse().success(constants.DATA_SAVED, group, res, responseCodes.CREATED);
    } catch (exception) {
        defaultResponse().error({message: exception.message}, res, responseCodes.EXCEPTION);
    }
}

exports.getAll = async (req, res) => {
    try {
        let groups = await req.models.Groups.find({isDeleted: false});
        if (groups)
            defaultResponse().success(constants.DATA_RETRIEVED, groups, res, responseCodes.SUCCESS);
        else
            defaultResponse().success(constants.DATA_NOT_FOUND, res, responseCodes.NO_CONTENTS);
    } catch (exception) {
        defaultResponse().error({message: exception.message}, res, responseCodes.EXCEPTION);
    }
}

exports.getOne = async (req, res) => {
    try {
        let groupId = req.params.id;
        let group = await req.models.Groups.findById(groupId);
        if (group)
            defaultResponse().success(constants.DATA_RETRIEVED, group, res, responseCodes.SUCCESS);
        else
            defaultResponse().success(constants.DATA_NOT_FOUND, res, responseCodes.NO_CONTENTS);
    } catch (exception) {
        defaultResponse().error({message: exception.message}, res, responseCodes.EXCEPTION);
    }
}

exports.update = async (req, res) => {
    try {
        let requestBody = req.body != null ? req.body : defaultResponse().error({message: constants.INVALID_BODY}, res, errorCode.INVALID_BODY);
        let groupId = req.params.id;
        let group = await req.models.Groups.findOneAndUpdate({_id: groupId}, requestBody, {new: true});
        if (group)
            defaultResponse().success(constants.DATA_RETRIEVED, group, res, responseCodes.SUCCESS);
        else
            defaultResponse().success(constants.DATA_NOT_FOUND, res, responseCodes.NO_CONTENTS);
    } catch (exception) {
        defaultResponse().error({message: exception.message}, res, responseCodes.EXCEPTION);
    }
}
