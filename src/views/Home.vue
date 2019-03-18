<template>
  <div class="about">
    <h1>Select .dat file</h1>
    <input type="file" @change="onFileChange" accept=".dat">
    <br>
    <br>
    <textarea v-show="dat" name id cols="100" rows="20" v-model="dat"></textarea>
  </div>
</template>

<script>
export default {
  data: () => ({
    dat: ""
  }),

  computed: {
    formattedStr() {
      return this.sortData(this.dat);
    },

    userIDs() {
      return this.getUserIDs(this.formattedStr);
    }
  },

  methods: {
    removeArrayDuplicates(arr) {
      let unique_array = arr.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
      });
      return unique_array;
    },

    // file upload
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createFile(files[0]);
    },

    // create file from upload
    createFile(file) {
      const reader = new FileReader();

      var vm = this;

      reader.onload = e => {
        vm.dat = e.target.result;
      };

      reader.readAsText(file);
    },

    getUserIDs(arr) {
      if (arr.length === 0) return [];

      let ids = arr.map(x => {
        return x[0];
      });

      return this.removeArrayDuplicates(ids);
    },

    // sort data received
    sortData(data) {
      if (data === "") return [];

      let dat = data.split("\n").map(x => {
        return x.trim().split(" ");
      });

      let newDat = dat.map(x => {
        let withTabs = x[0] + "\t" + x[1];

        // remove tabs
        let withoutTabs = withTabs.split("\t");

        return withoutTabs;
      });

      return newDat;
    }
  }
};
</script>

<style>
body {
  background: #f0f0f0;
}

textarea {
  margin-top: 10px;
  margin-left: 50px;
  background: none repeat scroll 0 0 #000;
  border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
  border-radius: 6px 6px 6px 6px;
  border-style: none solid solid none;
  border-width: medium 1px 1px medium;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  color: #18e40f;
  font-family: "Courier New", Courier, monospace;
  font-size: 1em;
  line-height: 1.4em;
  padding: 5px 8px;
  /* transition: background-color 0.2s ease 0s; */
}
</style>