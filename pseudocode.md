# React Restaurant Pseudocode
## Functionality
**Main Goal**: Create a menu website for a fake restaurant using an API to dynamically generate the menu items.

### Things to Keep in Mind
- The API has a limit for 10 menu items per call

## MoSCoW
### Must Have
- Must have a restaurant name, address and hours of operations listed
- Must access API for menu data
- Must have at least one menu section type displayed
- Must render at least 15 menu items of a type
- Must generate a unique price for each food item
- Must make each menu item a molecule
- Must manage state

### Should Have
- Should use react class and components to split up molecules and organisms
- Should use Bootstrap for styling
- Should use MVC to structure components

### Could Have
- Could have ability to display multiple menu section types
- Could include 'Specials Menu' that changes daily
- Could parse API for sides menu type to include sides substitutions for each menu item

### Won't Have
- Won't have only one class/component
- Won't hard code menu items or prices
- Won't use other NPM packages (yet)

## Model View Controller (MVC)
1. **Model**
    - store API data
    - store cost for each item
    - OPTIONAL store menu type selected

2. **View**
    - render menu item listing based on API data obtained
    - OPTIONAL update menu item listing if new menu type selected

3. **Controller**
    - handle API call
    - generate unique cost for each menu item based on menu type
    - OPTIONAL handle button click to change menu type

## Breakdown Wireframe UI into Components
```
App/Page
    - Menu
        - MenuType
            - MenuItem
```

### App/Page
- renders navbar with restaurant name
- renders footer with address and hours of operation

### Menu
- renders menu template
- calls API for drink types
- renders Beverages section

### MenuType
- gets menu type from state
- renders header, image and buttons based on menu type
- updates view if button selected to change menu type
- tells Menu Item component if state changed from button clicked

### MenuItem
- gets API data based on state of menu type
- generates random price for each item and renders it
- renders item name and description based on API call

### Class Responsibility Collaborator (CRC)
```
App         |
            |


```

### Functions
