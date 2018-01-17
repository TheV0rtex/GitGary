var config = require('./config.json');

exports.hasPermission = function (member, commandName) {
    var result = true;

    for (var i = 0; i < config.permissiongroups.length; i++) {
        var group = config.permissiongroups[i];

        if (!group.commands.includes(commandName))
            continue;

        result = false;

        var memberRoles = member.roles.map(r => r.name);

        for (var m = 0; m < memberRoles.length; m++) {
            for (var g = 0; g < group.roles.length; g++) {
                if (group.roles[g] === memberRoles[m])
                    return true;
            }
        }
    }

    return result;
}
