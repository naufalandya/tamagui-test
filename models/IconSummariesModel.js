// IconSummariesModel.js

class IconSummariesModel {
    constructor({ icon, title, amount, unit }) {
      this.icon = icon;
      this.title = title;
      this.amount = amount;
      this.unit = unit;
    }
  
    static fromJson(json) {
      return new IconSummariesModel({
        icon: json.icon,
        title: json.title,
        amount: json.amount,
        unit: json.unit,
      });
    }
  }
  
  export default IconSummariesModel;
  