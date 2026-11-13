// @ts-check
/// <reference path='types-dnscontrol.d.ts' />

D('jacobhobbie.com',
    REGISTRAR('porkbun'),
    SERVICE('cloudflare'),
    // Cloudflare Default TTL
    DefaultTTL('1'),
    // WWW CNAME
    CNAME('www', 'jacobhobbie.com.', CF_PROXY_ON),
    // Fastmail Settings
    CNAME('fm1._domainkey', 'fm1.jacobhobbie.com.dkim.fmhosted.com.', CF_PROXY_OFF),
    CNAME('fm2._domainkey', 'fm2.jacobhobbie.com.dkim.fmhosted.com.', CF_PROXY_OFF),
    CNAME('fm3._domainkey', 'fm3.jacobhobbie.com.dkim.fmhosted.com.', CF_PROXY_OFF),
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.'),
    TXT('@', 'v=spf1 include:spf.messagingengine.com ?all'),
    // Bluesky Settings
    TXT('_atproto.bsky', 'did=did:plc:ctqbmzjkhqkhpftpm6ajt5hx'),
    TXT('_atproto.flashes', 'did=did:plc:ai44diod3pqkcnyfncqbgqi3'),
    // Extras
    TXT('pronouns', 'he/him'),
    // DMARC
    TXT('_dmarc', 'v=DMARC1; p=none; rua=mailto:de15e7d057474081b66395c43a9658b4@dmarc-reports.cloudflare.net')
);

D('hobbie.dev',
    REGISTRAR('porkbun'),
    SERVICE('cloudflare', ALL_NS, { manage_single_redirects: true}),
    // Cloudlflare Default TTL
    DefaultTTL('1'),
    // Cloudflare Hosting
    // FoundryVTT
    CNAME('foundry', '15eb63ed-beec-4278-a9c0-bce0165b82ef.cfargotunnel.com.', CF_PROXY_ON),
    // Seerr
    CNAME('seerr', '15eb63ed-beec-4278-a9c0-bce0165b82ef.cfargotunnel.com.', CF_PROXY_ON),
    CNAME('request', '15eb63ed-beec-4278-a9c0-bce0165b82ef.cfargotunnel.com.', CF_PROXY_ON),
    // Redirect `request` to `seerr`
    CF_SINGLE_REDIRECT('request-to-seerr', 301,
    'http.host eq "request.hobbie.dev"',
    'concat("https://seerr.hobbie.dev", http.request.uri.path)'),
    // Tailscale Hosting
    // Homebridge
    A('hb', '100.121.229.72', CF_PROXY_OFF),
    AAAA('hb', 'fd7a:115c:a1e0::d901:e548', CF_PROXY_OFF),
    // WUD (What's Up Docker)
    A('wud', '100.121.229.72', CF_PROXY_OFF),
    AAAA('wud', 'fd7a:115c:a1e0::d901:e548', CF_PROXY_OFF),
    // qBittorrent
    A('qb', '100.121.229.72', CF_PROXY_OFF),
    AAAA('qb', 'fd7a:115c:a1e0::d901:e548', CF_PROXY_OFF),
    // Prowlarr
    A('prowlarr', '100.121.229.72', CF_PROXY_OFF),
    AAAA('prowlarr', 'fd7a:115c:a1e0::d901:e548', CF_PROXY_OFF),
    // Radarr
    A('radarr', '100.121.229.72', CF_PROXY_OFF),
    AAAA('radarr', 'fd7a:115c:a1e0::d901:e548', CF_PROXY_OFF),
    // Sonarr
    A('sonarr', '100.121.229.72', CF_PROXY_OFF),
    AAAA('sonarr', 'fd7a:115c:a1e0::d901:e548', CF_PROXY_OFF),
    // Bazarr
    A('bazarr', '100.121.229.72', CF_PROXY_OFF),
    AAAA('bazarr', 'fd7a:115c:a1e0::d901:e548', CF_PROXY_OFF),
    // Tracearr
    A('tracearr', '100.121.229.72', CF_PROXY_OFF),
    AAAA('tracearr', 'fd7a:115c:a1e0::d901:e548', CF_PROXY_OFF),
    // Resend SMTP Mail
    // DKIM Verification
    TXT('resend._domainkey.updates', 'p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDR3KSeuE+F0NHJwOuO+63xSZLzMhNTUwcFjmNX/lNgRsFuBVKYHCPp9QtREAgJsIsgmakH80/H/KbFHISoVThuqYtJeANha7ejCuZP89JPRYDmH+vxyErDAaSD6dOrjf4IcYX7cun4Mt4VNJJi7Ie0yNyGKbjQeFojkpCgZTqkbwIDAQAB'),
    // Enable Sending
    CNAME('rsend.updates', 'rsend.forge.rmta.net', CF_PROXY_OFF),
    CNAME('send.updates', 'send.forge.rmta.net', CF_PROXY_OFF),
    // DMARC
    TXT('_dmarc', 'v=DMARC1; p=none;')
);

D('hobbie.family',
    REGISTRAR('porkbun'),
    NAMESERVER('maceio.ns.porkbun.com.'),
    NAMESERVER('curitiba.ns.porkbun.com.'),
    NAMESERVER('salvador.ns.porkbun.com.'),
    NAMESERVER('fortaleza.ns.porkbun.com.')
);

D('thehobbieshop.com',
    REGISTRAR('porkbun'),
    NAMESERVER('maceio.ns.porkbun.com.'),
    NAMESERVER('curitiba.ns.porkbun.com.'),
    NAMESERVER('salvador.ns.porkbun.com.'),
    NAMESERVER('fortaleza.ns.porkbun.com.')
);

D('hobbieforhouse.org',
    REGISTRAR('porkbun'),
    NAMESERVER('maceio.ns.porkbun.com.'),
    NAMESERVER('curitiba.ns.porkbun.com.'),
    NAMESERVER('salvador.ns.porkbun.com.'),
    NAMESERVER('fortaleza.ns.porkbun.com.')
);

D('vortexmanipulators.com',
    REGISTRAR('porkbun'),
    NAMESERVER('maceio.ns.porkbun.com.'),
    NAMESERVER('curitiba.ns.porkbun.com.'),
    NAMESERVER('salvador.ns.porkbun.com.'),
    NAMESERVER('fortaleza.ns.porkbun.com.')
);

D('arenahobbies.com',
    REGISTRAR('porkbun'),
    SERVICE('cloudflare'),
    // Cloudlflare Default TTL
    DefaultTTL('1')
);