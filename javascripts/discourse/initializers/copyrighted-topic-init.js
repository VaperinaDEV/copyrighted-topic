export default {
  name: "copyrighted-topic-init",
  initialize(container) {
    let appEvents = container.lookup('service:app-events');
    
    appEvents.on('page:changed', data => {
      let urlPrefix = "/t/";
      let pattern = new RegExp('^' + urlPrefix);
      let hasPrefix = pattern.test(data.url);
        
      if (hasPrefix) {
        const copyrightTag = settings.copyright_tag;
        const copyrightBody = $("body.tag-" + copyrightTag);   
        const disableContextmenu = settings.disable_contextmenu;
        const disableCopy = settings.disable_copy;
        
        // Disable right click, context menu
        if (disableContextmenu && copyrightBody) {
          copyrightBody.on('contextmenu', '#post_1 .cooked', function(e) {
            return false;
          });
        }
        
        // Disable copy and cut
        if (disableCopy && copyrightBody) {
          copyrightBody.bind('copy', '#post_1 .cooked', function(e) {
            return false;
          });
        }
      }
    });
  },
};
