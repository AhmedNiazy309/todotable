<template>
  <div>
  <div class="container">
  <div class="row">
  <div class="col-md-4">
    <h3>User Name</h3>
    <input type="text" class="Ay" v-model="name" />
    <p>{{ validname }}</p>
  </div>
  <div class="col-md-4">
    <h3>Age</h3>
    <input type="number" class="Ay" v-model="age" />
    <p>{{ validage }}</p>
  </div>
  <div class="col-md-4">
    <h3>Aderss</h3>
    <input type="text" class="Ay" v-model="adress" />
    <p>{{ validadress }}</p>
  </div>
  </div>
  </div>
    <p>
      <button class="h-btn h-btn-s h-btn-blue" @click="add(datas)">
        <i class="h-icon-plus"></i>
        <span>Add a List</span>
      </button>
    </p>
    <Table ref="table" :datas="datas" :columns="columns" @sort="triggerSort">
    <TableItem title="Index"  prop="$index" :width="150"> </TableItem>
      <TableItem title="ID"  prop="$serial" :width="150"> </TableItem>
          <TableItem title="name" prop="name" :width="150" sort="true" ></TableItem>
      <TableItem title="age"  prop="age"  :width="150"></TableItem>
      <TableItem
        title="address"
        prop="address"
        align="center"
        :width="150"
      ></TableItem>

          <TableItem title="operating" :width="100" fixed="right">
        <template slot-scope="{ data }">
          <button class="h-btn h-btn-s h-btn-red" @click="remove(datas, data)">
            <i class="h-icon-trash"></i>
          </button>
        </template>
      </TableItem>

      <div slot="empty">Custom reminder: no data at this time</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      address:"",
      em:"",
      // columns: [
      //   { title: "Index", prop: "$index", width: 100 },
      //   { title: "ID", prop: "$serial", width: 100 },
      //   { title: "Name", prop: "name", sort: true },
      //   {
      //     title: "Age",
      //     render: (item) => `${item.age}`,
      //     sortProp: "age",
      //     sort: true,
      //   },
      //   { title: "Address", prop: "address" },
      // ],
      datas: [
        {name: "Test 5", age: 9, address: "Shanghai" },
        {name: "Test 6", age: 8, address: "Shanghai" },
        {name: "Test 7", age: 14, address: "Shanghai" },
        {name: "Test 5", age: 17, address: "Shanghai" },
        {name: "Test 6", age: 18, address: "Shanghai" },
        {name: "Test 7", age: 12, address: "Shanghai" },
      ],
    };
  },
  methods: {
    triggerSort(data) {
      this.datas.sort((a, b) => {
        let ad = a[data.prop];

        let bd = b[data.prop];
        let index = ad == bd ? 0 : ad > bd ? 1 : -1;
        return data.type == "asc" ? index : -index;
      });
    },
    remove(datas, data) {
      datas.splice(datas.indexOf(data), 1);
    },
    add(datas) {
      datas.push({
        id: 7,
        name: `${this.name}`,
        age: `${this.age}`,
        address: `${this.adress}`,
      });
      this.name="";
      this.age="";
      this.adress="";
    },
  },
  computed:{
    validname: function () {
      if (!this.name) {
        return "user Name can't be Empty";
      } 
      else {
        return this.em;
      }
    },
    validage: function () {
      if (!this.age) {
        return "Age can't be Empty";
      } 
      else {
        return this.em;
      }
    },
    validadress: function () {
      if (!this.adress) {
        return "Adress can't be Empty";
      } 
      else {
        return this.em;
      }
    },

}
};
</script>
