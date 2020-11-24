import Sequelize from 'sequelize';

export default class Category extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      name: DataTypes.STRING,
    }, {
      tableName: 'category',
      modelName: 'category',
      sequelize,
      timestamps: false
    });
  }
}
