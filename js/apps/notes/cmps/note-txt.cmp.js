export default {
  name:"text-note",
  props: ["info", "noteId"],
  template: `
          <section :style="backgroundColor" class="note-text-container">    
              <div class="note-text">    
                <h3 @keyup="updateNote" contenteditable="true">{{info.title}}</h3>    
                <p @keyup="updateNote" contenteditable="true">{{info.txt}}</p>    
              </div>
              <!-- <input type="text" v-model="val" @change="reportVal" :disabled="isDisabled"/> -->
             <!-- <label>
                {{info.label}}
                <input type="text" v-model="val" @change="reportVal" />
             </label>   -->
             <!-- <div flex flex-column>
                <label for="">{{info.title}}</label>
                <textarea v-model="val" @change="reportVal" rows="5" cols="33">Enter Text...</textarea>
                </div> -->
                <!-- <pre>{{info}}</pre> -->

          </section>
          `,

  data() {
    return {
      // val: "",
      // note: null,
      newNote: {
      newTitle: this.info.title,
      newTxt: this.info.txt,
      id: this.noteId,
      url: ''
      }

    };
  },
  methods: {
    // reportVal() {
    //   this.$emit("setVal", this.val);
      // console.log("setVal", this.val);
    // },
    updateNote(ev) {
      // console.log('ev', ev);
      if (ev.target.nodeName === 'H3') this.newNote.newTitle = ev.currentTarget.textContent;
      if (ev.target.nodeName === 'P') this.newNote.newTxt = ev.currentTarget.textContent;
      this.$emit('updateNote', {...this.newNote});
      // console.log('after emit', ev.target.nodeName);
    },
    // updateTitle(ev){
    //   this.newTitle = ev.currentTarget.textContent
    //   this.$emit('noteTitleEdited', this.noteId, this.newTitle);
    //   console.log('h3 updated', ev.currentTarget.textContent,this.newTitle);
    //   console.log('event', ev);
      // console.log('h3.noteId',this.noteId);
      // console.log('h3.value',this.info.title);
      // console.log(ev.target.textContent);
      // this.$emit('noteTitleEdited', this.info.title);
    // },
    // updateTxt(){
    //   this.newTxt = ev.currentTarget.textContent
    //   this.$emit('noteTxtEdited', this.newTxt);
    //   console.log('p updated', ev.currentTarget.textContent, this.newTxt);
    // }
  },
  computed: {
    backgroundColor() {
      return `background-color: ${this.info.style.backgroundColor}`;
    },
    // listId() {
    //   return "list" + this._uid;
    // },
  },
  created() {
    // console.log(this.info);
    // console.log(this.info.label);
  },
};
