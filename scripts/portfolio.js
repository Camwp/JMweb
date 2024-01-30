

  (function() {
    // INITIALIZATION OF NAV SCROLLER
    // =======================================================
    new HsNavScroller('.js-nav-scroller')


    // INITIALIZATION OF SHUFFLE
    // =======================================================
    class ShufflePorfolio {
      constructor(element) {
        this.element = element;
        this.shuffle = new Shuffle(element, {
          itemSelector: '.js-shuffle-item',
          speed: 500
        })

        this.addFilterButtons()
      }

      addFilterButtons() {
        const options = document.querySelector('.js-filter-options')
        if (!options) {
          return
        }

        const filterButtons = Array.from(options.children)
        const onClick = this._handleFilterClick.bind(this)
        filterButtons.forEach((button) => {
          button.addEventListener('click', onClick, false)
        });
      }

      _handleFilterClick(evt) {
        const btn = evt.currentTarget.firstElementChild
        const isActive = btn.classList.contains('active')
        const btnGroup = btn.getAttribute('data-group')

        this._removeActiveClassFromChildren(btn.parentNode.parentNode)

        let filterGroup
        if (isActive) {
          btn.classList.remove('active')
          filterGroup = Shuffle.ALL_ITEMS
        } else {
          btn.classList.add('active')
          filterGroup = btnGroup
        }

        this.shuffle.filter(filterGroup)
      }

      _removeActiveClassFromChildren(parent) {
        const { children } = parent
        for (let i = children.length - 1; i >= 0; i--) {
          children[i].firstElementChild.classList.remove('active')
        }
      }
    }

    new ShufflePorfolio(document.querySelector('.js-shuffle'))
  })()
