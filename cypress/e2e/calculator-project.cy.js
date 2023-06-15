describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
  });

  it("should display a total of 0", () => {
    cy.visit("http://127.0.0.1:5501/index.html");

    const total = cy.get("#total");
    total.should("contain", "0");
  });

  it("should add 2 numbers", () => {
    cy.visit("http://127.0.0.1:5501/index.html");

    //num1 = 7
    cy.get("body > :nth-child(2) > :nth-child(5)").click();
    // + operator
    cy.get(":nth-child(16)").click();
    //num2 = 3
    cy.get(":nth-child(15)").click();
    //equals
    cy.get("#equals").click();
    // total
    cy.get("#total").invoke("text").should("match", /10/);
  });

  it("should subtract 2 numbers", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
    //num1 = 7
    cy.get("body > :nth-child(2) > :nth-child(5)").click();
    // - operator
    cy.get(":nth-child(12)").click();
    //num2 = 3
    cy.get(":nth-child(15)").click();
    //equals
    cy.get("#equals").click();
    // total
    cy.get("#total").invoke("text").should("match", /4/);
  });

  it("should multipy 2 numbers", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
    //num1 = 7
    cy.get("body > :nth-child(2) > :nth-child(5)").click();
    // * operator
    cy.get(":nth-child(8)").click();
    //num2 = 3
    cy.get(":nth-child(15)").click();
    //equals
    cy.get("#equals").click();
    // total
    cy.get("#total").invoke("text").should("match", /21/);
  });

  it("should divide 2 numbers", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
    //num1 = 7
    cy.get("body > :nth-child(2) > :nth-child(5)").click();
    // / operator
    cy.get("body > :nth-child(2) > :nth-child(4)").click();
    //num2 = 3
    cy.get(":nth-child(15)").click();
    //equals
    cy.get("#equals").click();
    // total
    cy.get("#total").invoke("text").should("match", /2.33/);
  });

  it("should return 0 when cancel is clicked", () => {
    cy.visit("http://127.0.0.1:5501/index.html");

    cy.get("#clear").click();
    cy.get("#total").invoke("text").should("match", /0/);
  });

  it("should return all results to 2 decimal places", () => {
    cy.visit("http://127.0.0.1:5501/index.html");

    
  })
});
