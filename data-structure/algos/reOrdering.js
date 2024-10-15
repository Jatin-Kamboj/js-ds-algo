const items = [
  {
    id: "67",
    type: "material_panel",
    panel_price_detail_id: 44,
    name: "panel_one_price_panel_two",
    slope: 2,
    panel_type: "tapered",
    material_id: 21,
    created_at: "2024-10-14T12:01:03.685Z",
    updated_at: "2024-10-14T12:01:03.685Z",
    formulae: "",
    display_order: 31,
  },
  {
    id: "66",
    type: "material_panel",
    panel_price_detail_id: 44,
    name: "panel_one_price_panel",
    variable: "panel_one_price_panel",
    panel_type: "tapered",
    material_id: 21,
    created_at: "2024-10-14T12:00:06.062Z",
    updated_at: "2024-10-14T12:00:06.062Z",
    formulae: "",
    display_order: 30,
  },
  {
    id: "69",
    type: "material_panel",
    panel_price_detail_id: 44,
    name: "panel_one_price_panel",
    variable: "panel_one_price_panel",
    panel_type: "tapered",
    material_id: 21,
    created_at: "2024-10-14T12:00:06.062Z",
    updated_at: "2024-10-14T12:00:06.062Z",
    formulae: "",
    display_order: 34,
  },
];

const movedItems = [
  {
    id: "69",
    type: "material_panel",
    panel_price_detail_id: 44,
    name: "panel_one_price_panel",
    variable: "panel_one_price_panel",
    panel_type: "tapered",
    material_id: 21,
    created_at: "2024-10-14T12:00:06.062Z",
    updated_at: "2024-10-14T12:00:06.062Z",
    formulae: "",
    display_order: 34,
  },
  {
    id: "67",
    type: "material_panel",
    panel_price_detail_id: 44,
    name: "panel_one_price_panel_two",
    slope: 2,
    panel_type: "tapered",
    material_id: 21,
    created_at: "2024-10-14T12:01:03.685Z",
    updated_at: "2024-10-14T12:01:03.685Z",
    formulae: "",
    display_order: 31,
  },
  
  {
    id: "66",
    type: "material_panel",
    panel_price_detail_id: 44,
    name: "panel_one_price_panel",
    variable: "panel_one_price_panel",
    panel_type: "tapered",
    material_id: 21,
    created_at: "2024-10-14T12:00:06.062Z",
    updated_at: "2024-10-14T12:00:06.062Z",
    formulae: "",
    display_order: 30,
  },
 
];

const itemsDisplayOrder = items.reduce((prev, curr,id) => {
  prev[id] = curr.display_order;
  return prev;
}, {});

function changeOrderOfSecondElement() {
  const movedItem = items[2];
  const displacedItem = items[4];
  items[4] = items[2];
}

console.log("itemsDisplayOrder :>> ", itemsDisplayOrder);
console.log('movedItems :>> ', movedItems);
function reOrderAll() {

  // movedItems
  movedItems.forEach((item,id) => {
    const oldOrder = itemsDisplayOrder[id];
    item.display_order = oldOrder;
    console.log("oldOrder :>> ", item.id, oldOrder);
  });
}

reOrderAll();
