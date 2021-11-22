export class Random {
  public static getIntegerBetweenValues = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Hack : https://stackoverflow.com/questions/44230998/how-to-get-a-random-enum-in-typescript
  public static getEnumValue(enumType) {
      const enumSize = Object.keys(enumType).length / 2;
      const itemNumericalIndex = Random.getIntegerBetweenValues(0, enumSize - 1);
      const itemIndex = Object.keys(enumType)[itemNumericalIndex];
      return enumType[itemIndex];
  }

  public static getDragonName(): string {
      const names = ['Shenron', 'Spyro', 'Acnologia', 'Deathwing', 'Coeur de Givre', 'Draco'];
      return names[this.getIntegerBetweenValues(0, names.length - 1)];
  }
}
