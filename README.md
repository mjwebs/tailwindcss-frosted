# tailwindcss-frosted
A TailwindCSS plugin that provides a set of `frosted` classes to create a modern illusion of layering for modals and slide-over elements.


```html
<section class="p-5 shadow frosted">
  <span>
    <!-- Modal or slide-over content -->
  </span>
</section>
```

## Installation

Install the plugin from npm:

```sh
# Using npm
npm install @mjwebs/tailwindcss-frosted


Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@mjwebs/tailwindcss-frosted'),
    // ...
  ],
}
```
