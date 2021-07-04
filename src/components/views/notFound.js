export const notFound = {
  name: "notFound",
  data() {
    return {};
  },
  props: ["value","message","click","btn" ],
  methods:{
  },
  template: /*html */ `
        <div class="btn d-flex justify-content-center align-items-center resault" v-if="!value()">
            <div class="message position-relative p-5 d-flex justify-content-center align-items-center w-100 rounded border border-2">
                <button @click="click()" :class="{btnDisplay:!btn}" class="btn position-absolute px-3 py-2">
                    <i class="fas fa-times"></i>
                </button>
                <div class="content w-100">
                    <h3 class="mb-4 display-5">Sorry !!!</h3>
                    <p>{{message}}</p>
                </div>
            </div>
        </div>
    `,
};
