# DOCS Manual

## How to document a function ?

- `[optional]` Add author name of the function.
- Define parameters.
- Define the return type.
- Add small description in the function have some complex project.

## How to document a component ?

- `[optional]` Add author name of the component.
- Define the props.
- Add small description that describes why this component have been added.
- If there is some complex logic in the component, describe it, (moving complex logic outside component would be better).

## How to document pages components ?

- `[optional]` Add author name of the page.
- Add the path to the page.
- Define what dependecies this page needs.

## How to document custom hooks ?

- `[optional]` Add author name of the hook.
- `[optional]` Add an example of how to use.
- Define the parameters.
- Define the return type.
- Define when to use it.

## How to document GraphQL queries ?

- `[optional]` Add author name of the query.
- Define the parameters.
- Add description on what this query.
- Add which pages uses this query.

## How to document ui-library components ?

- `[optional]` Add author name of the component.
- Define the props.
- Define when to use it.
- Add examples that covers most uses in storybook.

## Tags used:

- `@author` , represents author name.
- `@param` , represens param name and description(optional).
- `@return` , represents the return type.
- `@desc` , represents description in general.
- `@dependecies` , represents dependencies list used.
- `@howToUse` , represents a small example on how to use the code.
- `@dependents` , represents dependents list.
- `@whenToUse` , represents when to use the code (the use cases this code is ideal for).

## Examples:

### Functions

```js
/**
 * @author Mahmoud
 * @param param1, string
 * @param param2, string
 * @return {TSomeType}
 * @desc This function takes two params,, etc...
 * **/
function someFunction(param1, param2) {
  return var1;
}
```

### Component

```js
/**
 * @author Mahmoud
 * @prop prop1, object
 * @prop theme, ThemeObject
 * @desc This component have ....
 * */
const Comp: FC<{}> = () => {
  return <div />;
};
```

### Page Component

```js
/**
 * @author Mahmoud
 * @path /path-name
 * @dependencies react-router-dom, dependency-name
 * @desc This page represents ...
 * */
const Page: NextFunctionComponent = () => {
  return <div />;
};
```

### Hook

```js
/**
 * @author Mahmoud
 * @howToUse const hookReturn = useHook(someParam);
 * @param param1, string
 * @return {String}
 * @desc This hook is used for ...
 * */
const useHook = param1 => {
  const [state, setState] = useState('');

  return state;
};
```

### GraphQL Query

```js
/**
 * @author Mahmoud
 * @param param1, number
 * @desc This query gets ...
 * @dependents Home, Profile
 * */
const query = gql`
    Query GetData(param1: Int!) {
        getData(id: param1) {
            id
            name
            paths {
                id
                name
                collaborators {
                    id
                }
            }
        }
    }
`;
```

### Ui-library component

```js
/**
 * @author Mahmoud
 * @prop placement, string => used for deciding from where the drawer should appear
 * @whenToUse Used when you need to show side modals (left or right)
 * */
const Drawer: FC<{}> = ({ placement }) => {
  return <div />;
};
```
