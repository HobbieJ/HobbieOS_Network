// @ts-check
/// <reference path='types-dnscontrol.d.ts' />

var REG_PORKBUN = NewRegistrar('porkbun');
var REG_NONE = NewRegistrar('none');
var DNS_PORKBUN = NewDnsProvider('porkbun');
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare');

D('jacobhobbie.com', REG_PORKBUN,
    DnsProvider(DNS_CLOUDFLARE),
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
    TXT('@', '\"v=spf1 include:spf.messagingengine.com ?all\"'),
    // Bluesky Settings
    TXT('_atproto.bsky', '\"did=did:plc:ctqbmzjkhqkhpftpm6ajt5hx\"'),
    TXT('_atproto.flashes', '\"did=did:plc:ai44diod3pqkcnyfncqbgqi3\"'),
    // Extras
    TXT('pronouns', '\"he/him\"')
);

D('hobbie.dev', REG_PORKBUN,
    DnsProvider(DNS_CLOUDFLARE),
    // Cloudlflare Default TTL
    DefaultTTL('1'),
    CNAME('foundry', '15eb63ed-beec-4278-a9c0-bce0165b82ef.cfargotunnel.com.', CF_PROXY_ON)
);

D('hobbie.family', REG_PORKBUN,
    NAMESERVER('maceio.ns.porkbun.com.'),
    NAMESERVER('curitiba.ns.porkbun.com.'),
    NAMESERVER('salvador.ns.porkbun.com.'),
    NAMESERVER('fortaleza.ns.porkbun.com.')
);

D('thehobbieshop.com', REG_PORKBUN,
    NAMESERVER('maceio.ns.porkbun.com.'),
    NAMESERVER('curitiba.ns.porkbun.com.'),
    NAMESERVER('salvador.ns.porkbun.com.'),
    NAMESERVER('fortaleza.ns.porkbun.com.')
);

D('hobbieforhouse.org', REG_PORKBUN,
    NAMESERVER('maceio.ns.porkbun.com.'),
    NAMESERVER('curitiba.ns.porkbun.com.'),
    NAMESERVER('salvador.ns.porkbun.com.'),
    NAMESERVER('fortaleza.ns.porkbun.com.')
);

D('vortexmanipulators.com', REG_PORKBUN,
    NAMESERVER('maceio.ns.porkbun.com.'),
    NAMESERVER('curitiba.ns.porkbun.com.'),
    NAMESERVER('salvador.ns.porkbun.com.'),
    NAMESERVER('fortaleza.ns.porkbun.com.')
);
