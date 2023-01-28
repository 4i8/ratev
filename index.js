class Rate {
  #data;
  constructor(...data) {
    if (typeof data !== "object")
      throw new Error("data must be array or object");
    data = data.flat();
    this.#data = data.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.value === item.value)
    );
    if (data.length === 0) return;
    //remove duplicate

    if (data.filter((item) => item.rate > 100 || item.rate <= 0).length > 0)
      throw new Error("rate must be 0.1 or higher than 100");
    if (data.filter((item) => item.rate).length !== data.length)
      throw new Error("require rate property");
    if (data.filter((item) => item.value).length !== data.length)
      throw new Error("require value property");
    if (
      data.filter(
        (item) =>
          typeof item.value === "number" || typeof item.value === "string"
      ).length !== data.length
    )
      throw new Error("value must be string or number");
    if (
      data.filter((item) => typeof item.rate === "number").length !==
      data.length
    )
      throw new Error("rate must be number");
  }
  get value() {
    let data = this.#data;
    var total = 0;
    for (var i = 0; i < data.length; i++) {
      total += data[i].rate;
    }
    var random = Math.random() * total;
    var current = 0;
    for (var i = 0; i < data.length; i++) {
      current += data[i].rate;
      if (random <= current) {
        return data[i].value;
      }
    }
  }
  push(...data) {
    data = data.flat();
    if (!Array.isArray(data) && typeof data !== "object")
      throw new Error("data must be array or object");
    if (typeof data === "object" && !Array.isArray(data)) data = [data];
    if (data.filter((item) => item.rate > 100 || item.rate <= 0).length > 0)
      throw new Error("rate must be 0.1 or higher than 100");
    if (data.filter((item) => item.rate).length !== data.length)
      throw new Error("require rate property");
    if (data.filter((item) => item.value).length !== data.length)
      throw new Error("require value property");
    if (
      data.filter(
        (item) =>
          typeof item.value === "number" || typeof item.value === "string"
      ).length !== data.length
    )
      throw new Error("value must be string or number");
    if (
      data.filter((item) => typeof item.rate === "number").length !==
      data.length
    )
      throw new Error("rate must be number");
    this.#data.push(...data);
    //remove duplicate
    this.#data = this.#data
      .filter((r) => r)
      .filter((item, index, self) => {
        if (index === self.findIndex((t) => t.value === item.value)) {
          if (data.find((t) => t.value === item.value)) {
            this.#data[self.findIndex((t) => t.value === item.value)].rate =
              data.find((t) => t.value === item.value).rate;
          }
          return true;
        }
      });
    return this.#data;
  }
  delete(...values) {
    if (values.length === 0) throw new Error("require values");
    for (let i = 0; i < values.length; i++) {
      var index = this.#data.findIndex((item) => item.value === values[i]);
      if (index === -1) return this.#data;
      this.#data.splice(index, 1);
    }
    return this.#data;
  }
  get data() {
    return this.#data;
  }
}
module.exports = Rate;
