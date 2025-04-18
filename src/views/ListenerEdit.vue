<template>
  <div>
    <portal to="app-bar-extension">
      <div style="display: flex; flex-direction: row; width: 100%">
        <v-tabs v-model="tab" align-with-title>
          <v-tab key="view" href="#view">
            View
            <v-icon x-small class="ml-1"> fa-eye </v-icon>
          </v-tab>
          <v-tab key="autorun" href="#autorun">
            Autorun
            <v-icon x-small class="ml-1"> fa-play </v-icon>
          </v-tab>
        </v-tabs>
      </div>
    </portal>

    <edit-page-top
      :breads="breads"
      :show-submit="initialLoad"
      :disable-submit="!canEdit && initialLoad"
      :show-copy="id > 0 && initialLoad"
      :show-delete="id > 0 && initialLoad"
      :submit-loading="loading"
      :copy-link="copyLink"
      :small-copy="true"
      :small-delete="true"
      @submit="submit"
      @delete="kill"
    >
      <template #extra-stuff>
        <v-switch
          v-if="!isNew && initialLoad"
          v-model="listener.enabled"
          color="green"
          label="Enabled"
          class="mr-2 mt-1"
          @change="toggleEnabled"
        />
        <v-menu v-if="!isNew && initialLoad" offset-y open-on-hover>
          <template #activator="{ on, attrs }">
            <v-btn class="mr-5" text icon small v-bind="attrs" v-on="on">
              <v-icon>fa-suitcase-rolling</v-icon>
            </v-btn>
          </template>
          <v-list class="ml-2 mr-2">
            <v-list-item
              v-for="(item, index) in commonStagers"
              :key="index"
              link
              :to="{
                name: 'stagerNew',
                query: { template: item, listener: listener.name },
              }"
            >
              <v-list-item-title>
                {{ item }}
              </v-list-item-title>
            </v-list-item>
            <v-divider />
            <v-list-item link :to="{ name: 'stagerNew' }">
              <v-list-item-title> Other </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </edit-page-top>

    <!-- Error Alert -->
    <error-state-alert
      v-if="errorState"
      :resource-id="id"
      resource-type="listener"
    />

    <!-- Tab Items -->
    <v-tabs-items v-else v-model="tab">
      <!-- General Tab Content -->
      <v-tab-item
        key="view"
        :value="'view'"
        :transition="false"
        :reverse-transition="false"
      >
        <v-card flat>
          <div class="headers" style="padding: 20px">
            <h3>{{ mode }} Listener</h3>
          </div>
          <tag-viewer
            v-if="!isNew"
            :tags="listener.tags"
            @update-tag="updateTag"
            @delete-tag="deleteTag"
            @new-tag="addTag"
          />
          <error-state-alert
            v-if="errorState"
            :resource-id="id"
            resource-type="listener"
          />
          <v-card v-else style="padding: 10px">
            <info-viewer class="info-viewer" :info="listenerInfo" />
            <v-autocomplete
              v-model="selectedTemplate"
              :items="listenerTemplateIds"
              :loading="!reset"
              dense
              outlined
              label="Type"
              :readonly="!canEdit"
            />
            <v-alert v-if="validationMessage" prominent type="warning">
              <v-row align="center">
                <v-col class="grow" style="word-wrap: word-break; width: 500px">
                  {{ validationMessage }}
                </v-col>
              </v-row>
            </v-alert>
            <general-form
              v-if="reset"
              ref="generalform"
              v-model="form"
              :options="listenerOptions"
              :priority="formPriorities"
              :readonly="!canEdit"
            />
          </v-card>
        </v-card>
      </v-tab-item>

      <!-- Autorun Modules Tab Content -->
      <v-tab-item
        key="autorun"
        :value="'autorun'"
        :transition="false"
        :reverse-transition="false"
      >
        <v-card flat>
          <AutoRunModules :selected-listener="listener" />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import * as listenerApi from "@/api/listener-api";
import GeneralForm from "@/components/GeneralForm.vue";
import InfoViewer from "@/components/InfoViewer.vue";
import EditPageTop from "@/components/EditPageTop.vue";
import ErrorStateAlert from "@/components/ErrorStateAlert.vue";
import TagViewer from "@/components/TagViewer.vue";
import AutoRunModules from "@/components/AutoRunModules.vue";
import { useListenerStore } from "@/stores/listener-module";

export default {
  name: "ListenerEdit",
  components: {
    TagViewer,
    InfoViewer,
    GeneralForm,
    ErrorStateAlert,
    EditPageTop,
    AutoRunModules,
  },
  data() {
    return {
      listener: { options: {} },
      listenerTemplate: { options: {} },
      selectedTemplate: "",
      form: {},
      reset: true,
      loading: false,
      formPriorities: ["Name", "Host", "Port"],
      errorState: false,
      validationMessage: null,
      initialLoad: false,
      commonStagers: [
        "multi_launcher",
        "multi_macro",
        "windows_csharp_exe",
        "windows_dll",
        "windows_shellcode",
      ],
    };
  },
  computed: {
    listenerStore() {
      return useListenerStore();
    },
    listenerTemplateIds() {
      return this.listenerStore.templateIds;
    },
    isNew() {
      return this.$route.name === "listenerNew";
    },
    isCopy() {
      return this.$route.params.copy === true;
    },
    mode() {
      if (this.isCopy) return "Copy";
      if (this.isNew) return "New";
      return "View";
    },
    canEdit() {
      return this.isNew || !this.listener.enabled;
    },
    id() {
      return this.isCopy ? 0 : this.$route.params.id;
    },
    copyLink() {
      if (this.id > 0)
        return { name: "listenerNew", params: { copy: true, id: this.id } };
      return {};
    },
    listenerInfo() {
      if (!this.listenerTemplate) return {};
      const a = this.listenerTemplate;
      return {
        authors: a.authors,
        description: a.description,
        comments: a.comments,
      };
    },
    listenerOptions() {
      if (!this.isNew || this.isCopy) {
        const options = {};
        Object.keys(this.listener.options).forEach((key) => {
          options[key] = { ...this.listenerTemplate.options[key] };
          options[key].value = this.listener.options[key];
        });
        return options;
      }
      const { options } = this.listenerTemplate;
      if (!options) return {};
      return options;
    },
    breads() {
      return [
        {
          text: "Listeners",
          disabled: false,
          to: "/listeners",
          exact: true,
        },
        {
          text: this.breadcrumbName,
          disabled: true,
          to: "/listeners-edit",
        },
      ];
    },
    breadcrumbName() {
      if (this.isCopy) return "New";
      if (this.listener.name) return this.listener.name;
      if (this.id) return this.id;
      return "New";
    },
    tab: {
      get() {
        return this.$route.query.tab || "view";
      },
      set(tab) {
        this.$router.replace({ query: { ...this.$route.query, tab } });
      },
    },
  },
  watch: {
    selectedTemplate: {
      async handler(val) {
        const a = await listenerApi
          .getListenerTemplate(val)
          .catch((err) => this.$snack.error(`Error: ${err}`));
        if (a) {
          this.reset = false;

          this.listenerTemplate = a;
          await this.$nextTick();
          this.reset = true;
          this.initialLoad = true;
        }
      },
    },
    id(val) {
      if (val) {
        this.getListener(val);
      }
    },
  },
  mounted() {
    this.listenerStore.getListenerTemplates();

    if (!this.isNew || this.isCopy) {
      // using the route param id instead of this.id
      // since this.id is 0 for copies.
      this.getListener(this.$route.params.id);
    }
  },
  methods: {
    deleteTag(tag) {
      listenerApi
        .deleteTag(this.listener.id, tag.id)
        .then(() => {
          this.listener.tags = this.listener.tags.filter(
            (t) => t.id !== tag.id,
          );
        })
        .catch((err) => this.$snack.error(`Error: ${err}`));
    },
    updateTag(tag) {
      listenerApi
        .updateTag(this.listener.id, tag)
        .then((t) => {
          const index = this.listener.tags.findIndex((x) => x.id === t.id);
          this.listener.tags.splice(index, 1, t);
          this.$snack.success("Tag updated");
        })
        .catch((err) => this.$snack.error(`Error: ${err}`));
    },
    addTag(tag) {
      listenerApi
        .addTag(this.listener.id, tag)
        .then((t) => {
          this.listener.tags.push(t);
        })
        .catch((err) => this.$snack.error(`Error: ${err}`));
    },
    async submit() {
      if (this.loading || !this.$refs.generalform.$refs.form.validate()) {
        return;
      }

      this.loading = true;
      if (this.id > 0) {
        listenerApi
          .updateListener({ ...this.listener, options: this.form })
          .then(() => {
            this.$snack.success("Listener updated");
            this.loading = false;
          })
          .catch((err) => {
            if (err.startsWith("[*]")) {
              this.validationMessage = err;
            } else {
              this.$snack.error(`Error: ${err}`);
            }
            this.loading = false;
          });
      } else {
        listenerApi
          .createListener(this.selectedTemplate, this.form)
          .then(({ id }) => {
            this.$snack.success("Listener created");
            this.loading = false;
            this.$router.push({ name: "listenerEdit", params: { id } });
          })
          .catch((err) => {
            if (err.startsWith("[*]")) {
              this.validationMessage = err;
            } else {
              this.$snack.error(`Error: ${err}`);
            }
            this.loading = false;
          });
      }
    },
    async kill() {
      if (
        await this.$root.$confirm(
          "Delete",
          `Are you sure you want to kill listener ${this.form.Name}?`,
          { color: "red" },
        )
      ) {
        try {
          await this.listenerStore.killListener(this.id);
          this.$router.push({ name: "listeners" });
        } catch (err) {
          this.$snack.error(`Error: ${err}`);
        }
      }
    },
    getListener(id) {
      listenerApi
        .getListener(id)
        .then((data) => {
          this.listener = data;
          this.listener.tags.forEach((tag) => {
            tag.color = tag.color || "#0E0CDA";
          });
          this.selectedTemplate = data.template;
        })
        .catch(() => {
          this.errorState = true;
        });
    },
    async toggleEnabled(val) {
      this.listener.enabled = val;

      if (
        val === true &&
        !(await this.$root.$confirm(
          "",
          "Re-enabling the listener will also save any unsaved option changes.",
          { color: "yellow" },
        ))
      ) {
        this.listener.enabled = !val;
        return;
      }

      try {
        const response = await listenerApi.updateListener({
          ...this.listener,
          options: this.form,
        });
        this.listener = response;
      } catch (err) {
        this.listener.enabled = !val;
        this.$snack.error(`Error: ${err}`);
      }
    },
  },
};
</script>

<style lang="scss">
// Overrides vuetify.css
// Because we moved the tabs into a div, which made the color funky.
.v-toolbar__content > div > .v-tabs > .v-slide-group.v-tabs-bar,
.v-toolbar__extension > div > .v-tabs > .v-slide-group.v-tabs-bar {
  background-color: inherit;
}
</style>
