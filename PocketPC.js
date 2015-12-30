"use strict";
var hardcore = false;

//Variables

//Blocks

Block.defineBlock(29, "Sticky Piston", [["piston_bottom", 0], ["piston_top_sticky", 0], ["piston_side", 0], ["piston_side", 0], ["piston_side", 0], ["piston_side", 0], ["piston_side", 0]]);

Block.defineBlock(33, "Piston", [["piston_bottom", 0], ["piston_top_normal", 0], ["piston_side", 0], ["piston_side", 0], ["piston_side", 0], ["piston_side", 0]]);
	
Block.defineBlock(118, "Cauldron", [["cauldron_bottom", 0], ["cauldron_top", 0], ["cauldron_side", 0], ["cauldron_side", 0], ["cauldron_side", 0], ["cauldron_side", 0]], 0, false, 0);

Block.defineBlock(165, "Slime Block", [["slime", 0]]);

Block.defineBlock(168, "Prismarine", [["prismarine_rough", 0]]);

Block.defineBlock(199, "Cauldron Water", [["still_water", 0]]);

//BlockRLayer

Block.setRenderLayer(118, 3);

//BlockRType

Block.setRenderType(118, 0);

//BlockShape

Block.setShape(199, 16/16, -14/16, 16/16, 0/16, 16/16);

//BlockOpacity

Block.setLightOpacity(118, 0.0000001);
Block.setLightOpacity(199, 1);
 
 //BlockConsumer
 
 Block.setRedstoneConsumer(29, true);
 Block.setRedstoneConsumer(33, true);
 
//Items

ModPE.setItem(380, "cauldron", 0, "Cauldron");
ModPE.setItem(399, "nether_star", 0, "Nether Star");
ModPE.setitem(500,"ender_pearl",0,"Ender Pearl", 16);
ModPE.setItem(408, "hopper", 0, "Hopper");
ModPE.setItem(426, "end_crystal", 0, "End Crystal");
ModPE.setItem(437, "dragon_breath", 0, "Dragon's Breath");
ModPE.setItem(443, "elytra", 0, "Elytra");

//ItemProperties

Item.setProperties(399, 
{
"foil":true
}
);

Item.setProperties(426,
{
"foil":true
}
);

Item.setProperties(437,
{
"foil": true
}
);

//Category

Item.setCategory(29, ItemCategory.TOOL);
Item.setCategory(33, ItemCategory.TOOL);
Item.setCategory(165, ItemCategory.TOOL);
Item.setCategory(408, ItemCategory.TOOL);
Item.setCategory(443, ItemCategory.TOOL);

Item.setCategory(437, ItemCategory.FOOD);
Item.setCategory(399, ItemCategory.FOOD);

Item.setCategory(380, ItemCategory.MATERIAL);
Item.setCategory(168, ItemCategory.MATERIAL);
Item.setCategory(168, ItemCategory.MATERIAL);

//CreativeInv

Player.addItemCreativeInv(29, 1, 0);
Player.addItemCreativeInv(33, 1, 0);
Player.addItemCreativeInv(165, 1, 0);
Player.addItemCreativeInv(168, 1, 0);
Player.addItemCreativeInv(380, 1, 0);
Player.addItemCreativeInv(399, 1, 0);
Player.addItemCreativeInv(408, 1, 0);
Player.addItemCreativeInv(426, 1, 0);
Player.addItemCreativeInv(437, 1, 0);
Player.addItemCreativeInv(443, 1, 0);

//CauldronCode

function useItem(x, y, z, itemId, blockId, itemDamage, blockDamage)
{
	
if(itemId == 380)
{
	
setTile(118, x, y+1, z);
	
if(itemId == 325 && itemDamage == 8)
{
		
if(getTile(x, y, z, id) == 118)
{
preventDefault()
setTile(199, x, y+1, z);
}	
else 
{

setTile(9, x, y+1, z);	

}
}
}
}

//modTick

function modTick(){
if(hardcore==true){
//I"ll work on it
}}

//Piston Code
