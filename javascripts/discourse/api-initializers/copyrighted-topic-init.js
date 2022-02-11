import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "copyrighted-topic-init",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      api.onPageChange((url, title) => {
        const copyrightTag = settings.copyright_tag;
        const body = $("body.tag-" + copyrightTag + " .container.posts");
        const topicCheck = $(".archetype-regular");
        const disableContextmenu = settings.disable_contextmenu;
        const disableCopy = settings.disable_copy;

        if (disableContextmenu && body && topicCheck) {
          body.on('contextmenu', '#post_1 .cooked', function(e){ return false; });
        }
        
        if (disableCopy && body && topicCheck) {
          body.bind('copy', '#post_1 .cooked', function(e){ return false; });
        }
      });
    });
  },
};
