import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>This is a food delivery app.</h2>
      <p>
        Check out what happens when you add things to your cart, use the plus
        and minus in the cart to see the total change, and try submitting the
        form incorrectly.
      </p>
      <p>
        The menu items are fetched on page reload from a realtime database and
        all of your cart data will get sent to that dummy database.
      </p>
    </section>
  );
};

export default MealsSummary;
