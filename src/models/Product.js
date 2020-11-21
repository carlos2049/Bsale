import Sequelize from 'sequelize';

export default class Product extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      name: DataTypes.STRING,
      url_image: DataTypes.STRING,
      price: DataTypes.FLOAT,
      discount: DataTypes.INTEGER,
      category: DataTypes.INTEGER,
    }, {
      tableName: 'product',
      modelName: 'product',
      sequelize,
      timestamps: false
    });
  }
}
