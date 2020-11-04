const db = require('../db/models').label;

class LabelModel {
  static create(labelData) {
    return db.create(labelData);
  }

  static read(repositoryId) {
    return db.findAll({
      where: { repositoryId },
    });
  }

  static findLabelByName(name) {
    return db.findOne({
      where: { name },
    });
  }

  static update(labelData) {
    return db.update(labelData, {
      where: {
        id: labelData.id,
      },
    });
  }

  static delete(labelId) {
    return db.destroy({
      where: {
        id: labelId,
      },
    });
  }
}

module.exports = LabelModel;
