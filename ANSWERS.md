# Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    > PropTypes are typings|interfaces|structs used to make sure that a components gets the expected data types for props

- [ ] Describe a life-cycle event in React?

    > life-cycle events are fired off at different times during a React component's life-cycle. An example is ComponentDidMount, which is run  immediately a component is rendered.

- [ ] Explain the details of a Higher Order Component?

    > Higher Order Component are react Component special kind of compponent that takes components as arguments and returns a component. Equivalent of higher order functions in JS

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

    > 1. Globally: A component can be styled from the general Index.css
    > 2. Component-separated: By creating different CSS files for every component and importing the CSS files to their components.
    > 3. Styled-components: CSS in JS, by embedding the CSS in the React/JSX elements. This privatilizes the CSS Rules to that specific element and it never bleeds out or effect another element's style
