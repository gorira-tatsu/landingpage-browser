const Quotes = [
    "To be, or not to be: that is the question.",
    "All the world's a stage, and all the men and women merely players.",
    "To thine own self be true.",
    "Love all, trust a few, do wrong to none.",
    "The better part of Valour, is Discretion.",
    "This above all: to thine own self be true.",
    "Give every man thy ear, but few thy voice.",
    "To sleep, perchance to dream.",
    "All that glisters is not gold.",
    "Brevity is the soul of wit.",
    "There is nothing either good or bad, but thinking makes it so.",
    "To do a great right, do a little wrong.",
    "Love is a smoke made with the fume of sighs.",
    "The lady doth protest too much, methinks.",
    "The course of true love never did run smooth.",
    "The better part of Valour, is Discretion.",
    "With mirth and laughter let old wrinkles come.",
    "The first thing we do, let's kill all the lawyers.",
    "To climb steep hills requires slow pace at first.",
    "The empty vessel makes the loudest sound.",
    "The better part of Valour, is Discretion.",
    "The lady doth protest too much, methinks.",
    "This above all: to thine own self be true.",
    "The better part of Valour, is Discretion.",
    "To do a great right, do a little wrong.",
    "Love is a smoke made with the fume of sighs.",
    "The lady doth protest too much, methinks.",
    "The course of true love never did run smooth.",
    "The better part of Valour, is Discretion.",
    "With mirth and laughter let old wrinkles come.",
    "The first thing we do, let's kill all the lawyers.",
    "To climb steep hills requires slow pace at first.",
    "The empty vessel makes the loudest sound.",
    "The better part of Valour, is Discretion.",
    "The lady doth protest too much, methinks.",
    "This above all: to thine own self be true.",
    "The better part of Valour, is Discretion.",
    "To do a great right, do a little wrong.",
    "Love is a smoke made with the fume of sighs.",
    "The lady doth protest too much, methinks.",
    "The course of true love never did run smooth.",
    "The better part of Valour, is Discretion.",
    "With mirth and laughter let old wrinkles come.",
    "The first thing we do, let's kill all the lawyers.",
    "To climb steep hills requires slow pace at first.",
    "The empty vessel makes the loudest sound.",
  ];

new Vue({
    el: '#app',
    data: {
      searchQuery: '',
      myTime: '',
      herTime: '',
      bookmarks: [
        { id: 2, name: 'Public', icon: 'fas fa-archive', link: 'https://scrapbox.io/gorira-public' },
        { id: 2, name: 'NLpapers', icon: 'fas fa-newspaper', link: 'https://scrapbox.io/nlpapers' },
        { id: 3, name: 'Twitter', icon: 'fab fa-twitter', link: 'https://twitter.com/' },
        { id: 4, name: 'YouTube', icon: 'fab fa-youtube', link: 'https://www.youtube.com/' },
        { id: 5, name: 'Hacker News', icon: 'fab fa-hacker-news', link: 'https://news.ycombinator.com/' },
        { id: 6, name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/' },        // Add more bookmarks as needed
      ],
      randomQuote: '',
    },
    methods: {
      search() {
        if (this.searchQuery.trim() !== '') {
            if (event.keyCode !== 13) return
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(this.searchQuery)}`;
            window.location.href = searchUrl;
        }
      },
      openLink(url) {
        window.location.href = url;
      },
      updateClocks() {
        const myTime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit'});
        const nyTime = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
        const herTime = nyTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit'});
  
        this.myTime = myTime;
        this.herTime = herTime;
      },
      setRandomQuote() {
        const randomIndex = Math.floor(Math.random() * Quotes.length);
        this.randomQuote = Quotes[randomIndex];
      },
    },
    mounted() {
        this.$nextTick(() => {
            document.getElementById('search-bar').focus();
          });
        this.setRandomQuote(); 
        setInterval(this.updateClocks, 1000);
        this.updateClocks();
    },
  });
  