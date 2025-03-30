var REG_PORKBUN = NewRegistrar("porkbun");
var DNS_PORKBUN = NewDnsProvider("porkbun");
var DNS_CLOUDFLARE = NewDnsProvider("cloudflare");

D("jacobhobbie.com", REG_PORKBUN,
    DnsProvider(DNS_CLOUDFLARE),
    CNAME("www", "jacobhobbie.com.", CF_PROXY_ON),
    CNAME("fm1._domainkey", "fm1.jacobhobbie.com.dkim.fmhosted.com."),
    CNAME("fm2._domainkey", "fm2.jacobhobbie.com.dkim.fmhosted.com."),
    CNAME("fm3._domainkey", "fm3.jacobhobbie.com.dkim.fmhosted.com."),
    MX("@", 10, "in1-smtp.messagingengine.com."),
    MX("@", 20, "in1-smtp.messagingengine.com."),
    TXT("@", "v=spf1 include:spf.messagingengine.com ?all"),
    TXT("pronouns", "he/him"),
    TXT("state", "Kansas")
);

D("hobbie.dev", REG_PORKBUN,
    DnsProvider(DNS_CLOUDFLARE)
);

D("hobbie.family", REG_PORKBUN,
    DnsProvider(DNS_CLOUDFLARE)
);

// For Uncle Warren
D("thehobbieshop.com", REG_PORKBUN,
    DnsProvider(DNS_CLOUDFLARE)
);

D("hobbieforhouse.org", REG_PORKBUN,
    DnsProvider(DNS_CLOUDFLARE)
);

D("vortexmanipulators.com", REG_PORKBUN,
    DnsProvider(DNS_CLOUDFLARE)
);
