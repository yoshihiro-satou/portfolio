$(document).ready(function() {
        $('.card').each(function() {
        var $this = $(this);
        
        // 要素が画面に表示されたら
        $(window).scroll(function() {
            if ($this.isInViewport()) {
            // アニメーションを始める
            $this.addClass('fade-in-top');
            }
        });
        });

        $('.profile-pic').each(function() {
            var $this = $(this);
            
            // 要素が画面に表示されたら
            $(window).scroll(function() {
                if ($this.isInViewport()) {
                // アニメーションを始める
                $this.addClass('roll-in-blurred-left');
                }
            });
            });

        $('.intro').each(function() {
                var $this = $(this);
                
                // 要素が画面に表示されたら
                $(window).scroll(function() {
                    if ($this.isInViewport()) {
                    // アニメーションを始める
                    $this.addClass('puff-in-left');
                    }
                });
                });

        $('.message-content').each(function() {
            var $this = $(this);
            
            // 要素が画面に表示されたら
            $(window).scroll(function() {
                if ($this.isInViewport()) {
                // アニメーションを始める
                $this.addClass('bounce-in-bck');
                }
            });
            });
    });
    
    // 要素が画面に表示されているかチェックする関数
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    
    document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('.header-nav nav a[href^="#"]');
        const navToggle = document.getElementById('nav-toggle');
        
        links.forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
              // ナビゲーションを閉じる
        if (navToggle) navToggle.checked = false;

              // 少し遅延させてからスクロール（既存の動作）
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
            duration: 2000
          });
        }, 300);
            }
          });
        });
      });
      document.getElementById('nav-toggle').addEventListener('click', function () {
        document.querySelector('.header-nav').style = 'width: 100%';
      });
      document.querySelector('.close-nav').addEventListener('click', function() {
        document.getElementById('nav-toggle').checked = false;
        setTimeout(() => {document.querySelector('.header-nav').style = 'width: 80%';
        }, 295);
      });
      document.querySelectorAll('.card').forEach(card => {
        const button = card.querySelector('.more-btn');
        const details = card.querySelector('.details');
        
        button.addEventListener('click', function() {
            details.classList.toggle('open');
            this.textContent = details.classList.contains('open') ? 'close' : 'more';
        });
    });
    