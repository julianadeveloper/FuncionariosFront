<!-- <template>
  <div class="field has-icons-left has-icons-right">
    <div class="control">
      <input
        v-if="showPassword"
        type="text"
        id="exampleInputEmail2"
        placeholder="Senha"
        required
        v-model="user.password"
        class="input is-link"
      />
      <input
        v-else
        type="password"
        id="exampleInputEmail2"
        placeholder="Senha"
        required
        v-model="user.password"
        class="input is-link"
      />
      <div class="btn-show-pass">
        <button class="btn btn-animate" @click.prevent="togglePassword">
          <span class="icon is-small is-left">
            <i
              class="fas"
              :class="{
                'fa-eye-slash': showPassword,
                'fa-eye': !showPassword,
              }"
            ></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import User from '@/interface/User';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'InputEye',
  props:{
   user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  data() {
    return { showPassword: false };
  },
methods:{
      togglePassword() {
      this.$emit("togglePassword", this.user)
    }
}


  
})
</script> -->
