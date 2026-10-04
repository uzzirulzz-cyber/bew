# Playbeat Digital — Admin Panel Bootstrap

Static, themed control-surface for **playbeat.digital** built on the Colorlib *Medico* HTML template
(Bootstrap 4.3.1). The scope of this build is **visual only**: apply the theme correctly and display
the production integrations. No backend, no secrets.

## Pages

| Page            | Purpose                                                            |
|-----------------|--------------------------------------------------------------------|
| `index.html`    | **Admin panel bootstrap** — store overview KPIs + production integration display (WhatsApp Cloud API, Meta App & compliance, Rapid gateway, storefront CI) |
| `about.html`    | Themed about page (template demo content)                          |
| `elements.html` | Theme element gallery — buttons, tables, forms, tabs, typography   |
| `contact.html`  | Branded contact page with form (client-side visual submit)         |

## Structure

```
css/     Bootstrap 4.3.1 + theme styles + admin.css (Playbeat layer)
js/      jQuery 1.12.1, Popper, Bootstrap, Owl Carousel, Nice Select,
         AjaxChimp stub, jQuery Form, jQuery Validation + custom scripts
fonts/   Themify / Flaticon / FontAwesome webfonts
img/     Playbeat branding + generated section backgrounds & placeholders
```

## Integration values shown on index.html

- WhatsApp Cloud API — `+92 332 1029333` "Playbeat Digital" · Phone Number ID `1379334501926944` · WABA `2409511223859087` (register pending)
- Meta App — App ID `1095332246787379`, data-deletion + deauthorize callbacks on playbeat.digital
- Rapid gateway — merchant `1367`, Easypaisa / JazzCash / Card (awaiting secret key)
- Storefront — playbeat.digital on Vercel, GitHub Actions deploy, Meta Pixel

Template credit: [Colorlib](https://colorlib.com) (CC BY 3.0) — attribution retained in footers.
