const display = new Vue({
  el: "#calculator",
  data: {
    rawValue: [0],
    displayValue: 0,
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
          this.displayValue = this.accumulator;
          return this.displayValue;
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
    },
    clearDisplay: function () {
      this.rawValue = [0];
      this.accumulator = "";
      this.operation = "";
      this.finalInt = 0;
    },
    returnDisplay: function () {
      this.displayValue = parseFloat(this.rawValue.join(""));
      return this.displayValue;
    },
    operate: function (operator) {
      this.operation = operator;
      if (this.finalInt > 0) {
        this.finalInt = 0;
      }
      if (!Number(this.accumulator) && operator === "add") {
        this.accumulator = parseFloat(this.calcValue);
      } else if (this.rawValue[0] !== 0 && operator === "add") {
        this.accumulator += parseFloat(this.calcValue);
      }
      if (!Number(this.accumulator) && operator === "mult") {
        this.accumulator = parseFloat(this.calcValue);
      } else if (this.rawValue[0] !== 0 && operator === "mult") {
        this.accumulator *= parseFloat(this.calcValue);
      }
      if (!Number(this.accumulator) && operator === "sub") {
        this.accumulator = parseFloat(this.calcValue);
      } else if (this.rawValue[0] !== 0 && operator === "sub") {
        this.accumulator -= parseFloat(this.calcValue);
      }
      if (!Number(this.accumulator) && operator === "div") {
        this.accumulator = parseFloat(this.calcValue);
      } else if (this.rawValue[0] !== 0 && operator === "div") {
        this.accumulator /= parseFloat(this.calcValue);
      }
      this.rawValue = [0];
    },
    equals: function () {
      if (this.finalInt === 0) {
        this.finalInt = parseFloat(this.calcValue);
      }
      switch (this.operation) {
        case "add":
          this.accumulator += this.finalInt;
          break;
        case "sub":
          this.accumulator -= this.finalInt;
          break;
        case "mult":
          this.accumulator *= this.finalInt;
          break;
        case "div":
          this.accumulator /= this.finalInt;
          break;
      }
      // this.operation = "";
      this.rawValue = [0];
    },
  },
});
