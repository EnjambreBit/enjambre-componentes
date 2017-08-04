import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "enjambre-componentes/logo",
  "Integration | Component | enjambre componentes/logo",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{enjambre-componentes/logo}}`);
  assert.ok(this.$().text());
});
