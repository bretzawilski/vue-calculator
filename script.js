const display = new Vue({
  el: "#calculator",
  data: {
    rawValue: [0],
    accumulator: "",
    operation: "",
    finalInt: 0,
  },
  computed: {
    calcValue: function () {
      if (!Number(this.accumulator)) {
        if (
          this.rawValue.length === 2 &&
          this.rawValue[0] === 0 &&
          this.rawValue[1] !== "."
        ) {
          this.rawValue.splice(0, 1);
          return this.returnDisplay();
        } else if (this.rawValue.length > 12) {
          this.rawValue.pop();
          return this.returnDisplay();
        } else {
          return this.returnDisplay();
        }
      } else {
        if (this.rawValue[0] === 0 && this.rawValue.length === 1) {
          let displayValue = this.accumulator;
          return displayValue;
        } else {
          if (
            this.rawValue.length === 2 &&
            this.rawValue[0] === 0 &&
            this.rawValue[1] !== "."
          ) {
            this.rawValue.splice(0, 1);
            return this.returnDisplay();
          } else if (this.rawValue.length > 12) {
            this.rawValue.pop();
            return this.returnDisplay();
          } else {
            return this.returnDisplay();
          }
        }
      }
    },
  },
  methods: {
    pushInt: function (event) {
      this.rawValue.push(event.currentTarget.value);
      // if (!this.accumulator) {
      //   this.rawValue.push(event.currentTarget.value);
      // } else if (this.accumulator && this.rawValue[0] === 0) {
      //   this.rawValue[0] = event.currentTarget.value;
      // }
    },
    clearDisplay: function () {
      this.rawValue = [0];
      this.accumulator = "";
      this.operation = "";
      this.finalInt = 0;
    },
    returnDisplay: function () {
      let displayValue = parseFloat(this.rawValue.join(""));
      return displayValue;
    },
    operate: function (operator) {
      if (!Number(this.accumulator)) {
        this.accumulator = parseFloat(this.calcValue);
      } else if (this.rawValue[0] !== 0) {
        this.accumulator += parseFloat(this.calcValue);
      }
      this.operation = operator;
      this.rawValue = [0];
    },
    equals: function () {
      if (this.finalInt === 0) {
        this.finalInt = parseFloat(this.calcValue);
      }
      this.accumulator += this.finalInt;
      this.operation = "";
      this.rawValue = [0];
    },
  },
});
