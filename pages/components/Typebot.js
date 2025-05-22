// components/Typebot.js
import { useEffect } from 'react';

const Typebot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://www.ai6i.com/web.js';
    script.onload = () => {
      // Initialize Typebot when the script is loaded
      window.Typebot.initBubble({
        typebot: 'ramagya-school-0ceedj1',
        previewMessage: {
          message: 'How can I help you!',
          autoShowDelay: 1000,
          avatarUrl:
            'https://storage.ai6i.com/typebot/public/workspaces/clweoxl0e0005si8l899oscgj/xbots/clzfyw74e001gfpe2y0ceedj1/hostAvatar?v=1722800938744',
        },
        theme: {
          button: {
            backgroundColor: '#002C39',
            customIconSrc:
              'https://storage.ai6i.com/typebot/public/workspaces/clweoxl0e0005si8l899oscgj/xbots/clzfyw74e001gfpe2y0ceedj1/hostAvatar?v=1722800938744',
          },
          chatWindow: {
            backgroundColor:
              'https://storage.ai6i.com/typebot/public/workspaces/clweoxl0e0005si8l899oscgj/xbots/clzfyw74e001gfpe2y0ceedj1/background?v=1722800923360',
          },
        },
      });
    };
    document.body.appendChild(script);
    
    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Typebot;
