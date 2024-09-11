import '../bigletter'
const A ='constA'
const B ='constB'
const C ='constC'
const D ='constD'
void function InventorySlot8() {
    return [
        {axis: 'x6', items: 'AABBCCDD'},
        {axis: 'y6', items: 'DDCCBBAA'},
        {axis: 'z6', items: 'ABABCCDD'},
        {axis: 't6', items: 'ABCDDCBA'},
    ]
}
void function InventorySlot9() {
    return[
        {axis: 't1', items: 'ABABCDCD'},
        {axis: 't2', items: 'DCDCBABA'},
        {axis: 't3', items: 'ABCDABCD'},
        {axis: 't4', items: 'ABCD||DCBA'},
    ]
}
void function InventorySlot10(){
   return [
        { axis: 't6', items: 'ABAB||DCDC' },
        { axis: 't7', items: 'ABAB\\//CDCD' },
        { axis: 't8', items: 'AB\|BA||CD|/DC' },
        { axis: 't9', items: 'CD&&DC\\//AB&&BA' }
    ]
}
