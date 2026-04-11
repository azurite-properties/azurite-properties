/* Property listing renderer */
var AzuriteProperties = window.AzuriteProperties || {};

AzuriteProperties.renderPropertyCard = function(p, depth) {
  depth = depth || '../../';
  var beds = p.bedrooms > 0 ? '<span class="prop-spec">&#9744; ' + p.bedrooms + ' Bed' + (p.bedrooms > 1 ? 's' : '') + '</span>' : '';
  var baths = p.bathrooms > 0 ? '<span class="prop-spec">&#9633; ' + p.bathrooms + ' Bath' + (p.bathrooms > 1 ? 's' : '') + '</span>' : '';
  var size = p.size ? '<span class="prop-spec">&#9632; ' + p.size + '</span>' : '';
  var cat = AzuriteProperties.categories[p.category] || {};
  return '<article class="prop-card" data-category="' + p.category + '">' +
    '<a href="' + depth + 'properties/' + p.slug + '/" class="prop-img" aria-label="View ' + p.title + '">' +
      '<div class="prop-img-inner" style="background-image:url(\'' + p.image + '\')" role="img" aria-label="' + p.title + '"></div>' +
      '<div class="prop-tag ' + (cat.tagClass || '') + '">' + p.status + '</div>' +
      '<div class="prop-type">' + p.type + '</div>' +
    '</a>' +
    '<div class="prop-body">' +
      '<div class="prop-loc">&#9679; ' + p.location + '</div>' +
      '<h3 class="prop-title"><a href="' + depth + 'properties/' + p.slug + '/">' + p.title + '</a></h3>' +
      '<p class="prop-desc">' + p.description + '</p>' +
      '<div class="prop-specs">' + beds + baths + size + '</div>' +
      '<div class="prop-foot">' +
        '<div class="prop-price">' + p.price + '<small>' + p.priceLabel + '</small></div>' +
        '<a href="' + depth + 'properties/' + p.slug + '/" class="prop-enquire">View &#8594;</a>' +
      '</div>' +
    '</div>' +
  '</article>';
};

AzuriteProperties.renderListingPage = function(containerId, category, depth) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var props = AzuriteProperties.getPropertiesByCategory(category);
  if (props.length === 0) {
    container.innerHTML = '<div class="empty-state"><h3>No properties found</h3><p>We may have listings not yet published. <a href="' + (depth||'../../') + '#contact" class="btn btn-navy btn-sm" style="margin-top:1rem;display:inline-flex">Contact Us</a></p></div>';
    return;
  }
  container.innerHTML = props.map(function(p){ return AzuriteProperties.renderPropertyCard(p, depth); }).join('');
};

AzuriteProperties.initFilter = function(containerId, depth) {
  var btns = document.querySelectorAll('.pf');
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btns.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.getAttribute('data-filter');
      AzuriteProperties.renderListingPage(containerId, cat === 'all' ? null : cat, depth);
    });
  });
};
