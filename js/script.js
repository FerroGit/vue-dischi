//  https://flynn.boolean.careers/exercises/api/array/music

var app = new Vue({
    el: '#app',
    data: {
        albums: [],
        type: ""
    },
    mounted: function () {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then(response => {
                this.albums = response.data.response;
            })
    },

})