export default {
data() {
return {
hovered: false,
};
},
methods: {
hoverEffect() {
this.hovered = true;
},
resetEffect() {
this.hovered = false;
},
},
};
