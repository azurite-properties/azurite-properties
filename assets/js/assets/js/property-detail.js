/* Property detail page renderer */
var AzuriteProperties = window.AzuriteProperties || {};

AzuriteProperties.renderDetailPage = function(slug, depth) {
  depth = depth || '../../../';
  var p = AzuriteProperties.getPropertyBySlug(slug);
  if (!p) {
    document.title = 'Property Not Found | Azurite Properties';
    var hero = document.getElementById('detail-hero');
    if (hero) hero.innerHTML = '<div class="container" style="padding:8rem 1.5rem;text-align:center"><h1 style="color:white;font-family:var(--ff-serif)">Property Not Found</h1><p style="color:rgba(255,255,255,.5);margin:1rem 0 2rem">This listing may have been removed or updated. <br>Contact us for current availability.</p><a href="' + depth + '#contact" class="btn btn-gold">Contact Us</a></div>';
    return;
  }
  document.title = p.metaTitle;
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', p.metaDescription);
  var cat = AzuriteProperties.categories[p.category] || {};
  var hero = document.getElementById('detail-hero');
  if (hero) {
    hero.style.backgroundImage = 'url(' + p.image + ')';
    var bc = document.getElementById('detail-breadcrumb');
    if (bc) bc.innerHTML = '<a href="' + depth + '">Home</a><span class="breadcrumb-sep">›</span><a href="' + depth + 'properties/">Properties</a><span class="breadcrumb-sep">›</span><span>' + p.title + '</span>';
    var badge = document.getElementById('detail-badge');
    if (badge) { badge.textContent = p.status; badge.className = 'prop-tag ' + (cat.tagClass||''); }
    var type = document.getElementById('detail-type');
    if (type) type.textContent = p.type;
    var loc = document.getElementById('detail-location');
    if (loc) loc.textContent = p.location;
    var title = document.getElementById('detail-title');
    if (title) title.textContent = p.title;
    var price = document.getElementById('detail-price');
    if (price) price.innerHTML = p.price + '<small>' + p.priceLabel + '</small>';
  }
  var desc = document.getElementById('detail-description');
  if (desc) desc.innerHTML = '<p>' + p.longDescription + '</p>';
  var feats = document.getElementById('detail-features');
  if (feats && p.features) {
    feats.innerHTML = p.features.map(function(f){ return '<div class="detail-feat"><span class="detail-feat-icon">&#10003;</span>' + f + '</div>'; }).join('');
  }
  var specs = document.getElementById('detail-specs');
  if (specs) {
    var s = '';
    if (p.bedrooms > 0) s += '<div class="detail-spec"><span class="ds-label">Bedrooms</span><span class="ds-val">' + p.bedrooms + '</span></div>';
    if (p.bathrooms > 0) s += '<div class="detail-spec"><span class="ds-label">Bathrooms</span><span class="ds-val">' + p.bathrooms + '</span></div>';
    if (p.size) s += '<div class="detail-spec"><span class="ds-label">Size</span><span class="ds-val">' + p.size + '</span></div>';
    s += '<div class="detail-spec"><span class="ds-label">Type</span><span class="ds-val">' + p.type + '</span></div>';
    s += '<div class="detail-spec"><span class="ds-label">Status</span><span class="ds-val">' + p.status + '</span></div>';
    specs.innerHTML = s;
  }
  var enquiryTitle = document.getElementById('enquiry-property-title');
  if (enquiryTitle) enquiryTitle.textContent = p.title;
  var hidden = document.getElementById('form-property-slug');
  if (hidden) hidden.value = p.slug;
  var hiddenTitle = document.getElementById('form-property-title');
  if (hiddenTitle) hiddenTitle.value = p.title;
};
