console.log('%cTaiizor Blazor Javascript has started.', 'color: #DC143C');


var Taiizor = {};


Taiizor.Meta = {};
Taiizor.Meta.Author = {};
Taiizor.Meta.Robots = {};
Taiizor.Meta.Charset = {};
Taiizor.Meta.Refresh = {};
Taiizor.Meta.Twitter = {};
Taiizor.Meta.Keywords = {};
Taiizor.Meta.Viewport = {};
Taiizor.Meta.Manifest = {};
Taiizor.Meta.Canonical = {};
Taiizor.Meta.OpenGraph = {};
Taiizor.Meta.Description = {};
Taiizor.Meta.ContentType = {};
Taiizor.Meta.ShortcutIcon = {};

Taiizor.Meta.Enum = {
    Other: "",
    Author: "author",
    Robots: "robots",
    Charset: "charset",
    Refresh: "refresh",
    Twitter: "twitter:",
    Keywords: "keywords",
    Viewport: "viewport",
    Manifest: "manifest",
    Canonical: "canonical",
    OpenGraph: "og:",
    Description: "description",
    ContentType: "content-type",
    ShortcutIcon: "shortcut icon"
};

Taiizor.Meta.Other.Enum = {
    ThemeColor: "theme-color",
    ColorScheme: "color-scheme",
    MsApplicationTileColor: "msapplication-TileColor",
    MsApplicationTileImage: "msapplication-TileImage",
    AppleMobileWebAppCapable: "apple-mobile-web-app-capable",
    MsApplicationNavButtonColor: "msapplication-navbutton-color",
    AppleMobileWebAppStatusBarStyle: "apple-mobile-web-app-status-bar-style"
};

Taiizor.Meta.Twitter.Enum = {
    Url: "url",
    Card: "card",
    Site: "site",
    Type: "type",
    Image: "image",
    Title: "title",
    Description: "description"
};

Taiizor.Meta.OpenGraph.Enum = {
    Url: "url",
    Type: "type",
    Title: "title",
    Image: "image",
    Locale: "locale",
    Sitename: "site_name",
    Description: "description"
};


Taiizor.Storage = {};
Taiizor.Storage.Local = {};
Taiizor.Storage.Session = {};


Taiizor.Add = {};
Taiizor.Add.Script = {};


Taiizor.Attribute = {};


Taiizor.Class = {};


Taiizor.Cookie = {};


Taiizor.Include = {};


Taiizor.Invoke = {};
Taiizor.Invoke.Reference = {};


Taiizor.Lang = {};
Taiizor.Lang.Tag = {};
Taiizor.Lang.Html = {};
Taiizor.Lang.Head = {};
Taiizor.Lang.Body = {};


Taiizor.Location = {};
Taiizor.Location.Href = {};
Taiizor.Location.Host = {};
Taiizor.Location.Port = {};
Taiizor.Location.Hash = {};
Taiizor.Location.Origin = {};
Taiizor.Location.Search = {};
Taiizor.Location.Pathname = {};
Taiizor.Location.Hostname = {};
Taiizor.Location.Protocol = {};


Taiizor.Redirect = {};


Taiizor.Reload = {};


Taiizor.Style = {};
Taiizor.Style.Styles = [];


Taiizor.Title = {};



Taiizor.Storage.Session.Set = function (sessionKey, sessionValue) {
    sessionStorage.setItem(sessionKey, sessionValue);
}

Taiizor.Storage.Session.Get = function (sessionKey) {
    return sessionStorage.getItem(sessionKey);
}

Taiizor.Storage.Session.Check = function (sessionKey) {
    let sessionValue = Taiizor.Storage.Session.Get(sessionKey);
    if (sessionValue == null || sessionValue == '') {
        return false;
    } else {
        return true;
    }
}

Taiizor.Storage.Session.Delete = function (sessionKey, execute = false) {
    if (Taiizor.Storage.Session.Check(sessionKey) || execute) {
        sessionStorage.removeItem(sessionKey);
    }
}



Taiizor.Storage.Local.Set = function (localKey, localValue) {
    localStorage.setItem(localKey, localValue);
}

Taiizor.Storage.Local.Get = function (localKey) {
    return localStorage.getItem(localKey);
}

Taiizor.Storage.Local.Check = function (localKey) {
    let localValue = Taiizor.Storage.Local.Get(localKey);
    if (localValue == null || localValue == '') {
        return false;
    } else {
        return true;
    }
}

Taiizor.Storage.Local.Delete = function (localKey, execute = false) {
    if (Taiizor.Storage.Local.Check(localKey) || execute) {
        localStorage.removeItem(localKey);
    }
}



Taiizor.Meta.Check = function (metaName) {
    let metaValue = Taiizor.Meta.Selector(metaName);
    if (metaValue == null) {
        return false;
    } else {
        return true;
    }
}

Taiizor.Meta.Check.Link = function (metaName) {
    let metaValue = Taiizor.Meta.Selector.Link(metaName);
    if (metaValue == null) {
        return false;
    } else {
        return true;
    }
}

Taiizor.Meta.Check.Equiv = function (metaName) {
    let metaValue = Taiizor.Meta.Selector.Equiv(metaName);
    if (metaValue == null) {
        return false;
    } else {
        return true;
    }
}

Taiizor.Meta.Check.Property = function (metaName) {
    let metaValue = Taiizor.Meta.Selector.Property(metaName);
    if (metaValue == null) {
        return false;
    } else {
        return true;
    }
}

Taiizor.Meta.Check.Advanced = function (metaName) {
    let metaValue = Taiizor.Meta.Selector.Advanced(metaName);
    if (metaValue == null) {
        return false;
    } else {
        return true;
    }
}

Taiizor.Meta.Content = function (metaName) {
    let metaValue = Taiizor.Meta.Check(metaName);
    if (metaValue) {
        return Taiizor.Meta.Selector(metaName).content;
    } else {
        return 'undefined';
    }
}

Taiizor.Meta.Content.Link = function (metaName) {
    let metaValue = Taiizor.Meta.Check.Link(metaName);
    if (metaValue) {
        return Taiizor.Meta.Selector.Link(metaName).href;
    } else {
        return 'undefined';
    }
}

Taiizor.Meta.Content.Equiv = function (metaName) {
    let metaValue = Taiizor.Meta.Check.Equiv(metaName);
    if (metaValue) {
        return Taiizor.Meta.Selector.Equiv(metaName).content;
    } else {
        return 'undefined';
    }
}

Taiizor.Meta.Content.Property = function (metaName) {
    let metaValue = Taiizor.Meta.Check.Property(metaName);
    if (metaValue) {
        return Taiizor.Meta.Selector.Property(metaName).content;
    } else {
        return 'undefined';
    }
}

Taiizor.Meta.Content.Advanced = function (metaName) {
    let metaValue = Taiizor.Meta.Check.Advanced(metaName);
    if (metaValue) {
        return Taiizor.Meta.Selector.Advanced(metaName).getAttribute(metaName);
    } else {
        return 'undefined';
    }
}

Taiizor.Meta.Selector = function (metaName) {
    return document.querySelector('meta[name="' + metaName + '"]');
}

Taiizor.Meta.Selector.Link = function (metaName) {
    return document.querySelector('link[rel="' + metaName + '"]');
}

Taiizor.Meta.Selector.Equiv = function (metaName) {
    return document.querySelector('meta[http-equiv="' + metaName + '"]');
}

Taiizor.Meta.Selector.Property = function (metaName) {
    return document.querySelector('meta[property="' + metaName + '"]');
}

Taiizor.Meta.Selector.Advanced = function (metaName) {
    return document.querySelector('meta[' + metaName + ']');
}

Taiizor.Meta.Author.Set = function (authorName) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Author)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Author).content = authorName;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Enum.Author + '" content="' + authorName + '">');
    }
}

Taiizor.Meta.Author.Remove = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Author) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Author).remove();
    }
}

Taiizor.Meta.Canonical.Set = function (uri) {
    if (Taiizor.Meta.Check.Link(Taiizor.Meta.Enum.Canonical)) {
        Taiizor.Meta.Selector.Link(Taiizor.Meta.Enum.Canonical).href = uri;
    } else {
        Taiizor.Add.Head('<link rel="' + Taiizor.Meta.Enum.Canonical + '" href="' + uri + '">');
    }
}

Taiizor.Meta.Canonical.Remove = function (execute = false) {
    if (Taiizor.Meta.Check.Link(Taiizor.Meta.Enum.Canonical) || execute) {
        Taiizor.Meta.Selector.Link(Taiizor.Meta.Enum.Canonical).remove();
    }
}

Taiizor.Meta.Charset.Set = function (encoding) {
    if (Taiizor.Meta.Check.Advanced(Taiizor.Meta.Enum.Charset)) {
        Taiizor.Meta.Selector.Advanced(Taiizor.Meta.Enum.Charset).setAttribute(Taiizor.Meta.Enum.Charset, encoding);
    } else {
        Taiizor.Add.Head('<meta ' + Taiizor.Meta.Enum.Charset + '="' + encoding + '">');
    }
}

Taiizor.Meta.Charset.Remove = function (execute = false) {
    if (Taiizor.Meta.Check.Advanced(Taiizor.Meta.Enum.Charset) || execute) {
        Taiizor.Meta.Selector.Advanced(Taiizor.Meta.Enum.Charset).remove();
    }
}

Taiizor.Meta.ContentType.Set = function (content) {
    if (Taiizor.Meta.Check.Equiv(Taiizor.Meta.Enum.ContentType)) {
        Taiizor.Meta.Selector.Equiv(Taiizor.Meta.Enum.ContentType).content = content;
    } else {
        Taiizor.Add.Head('<meta http-equiv="' + Taiizor.Meta.Enum.ContentType + '" content="' + content + '">');
    }
}

Taiizor.Meta.ContentType.Remove = function (execute = false) {
    if (Taiizor.Meta.Check.Equiv(Taiizor.Meta.Enum.ContentType) || execute) {
        Taiizor.Meta.Selector.Equiv(Taiizor.Meta.Enum.ContentType).remove();
    }
}

Taiizor.Meta.Description.Set = function (content) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Description)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Description).content = content;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Enum.Description + '" content="' + content + '">');
    }
}

Taiizor.Meta.Description.Remove = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Description) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Description).remove();
    }
}

Taiizor.Meta.Keywords.Set = function (content) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Keywords)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Keywords).content = content;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Enum.Keywords + '" content="' + content + '">');
    }
}

Taiizor.Meta.Keywords.Remove = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Keywords) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Keywords).remove();
    }
}

Taiizor.Meta.Manifest.Set = function (path) {
    if (Taiizor.Meta.Check.Link(Taiizor.Meta.Enum.Manifest)) {
        Taiizor.Meta.Selector.Link(Taiizor.Meta.Enum.Manifest).href = path;
    } else {
        Taiizor.Add.Head('<link rel="' + Taiizor.Meta.Enum.Manifest + '" href="' + path + '">');
    }
}

Taiizor.Meta.Manifest.Remove = function (execute = false) {
    if (Taiizor.Meta.Check.Link(Taiizor.Meta.Enum.Manifest) || execute) {
        Taiizor.Meta.Selector.Link(Taiizor.Meta.Enum.Manifest).remove();
    }
}

Taiizor.Meta.OpenGraph.SetUrl = function (uri) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Url)) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Url).content = uri;
    } else {
        Taiizor.Add.Head('<meta property="' + Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Url + '" content="' + uri + '">');
    }
}

Taiizor.Meta.OpenGraph.SetType = function (content) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Type)) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Type).content = content;
    } else {
        Taiizor.Add.Head('<meta property="' + Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Type + '" content="' + content + '">');
    }
}

Taiizor.Meta.OpenGraph.SetTitle = function (content) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Title)) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Title).content = content;
    } else {
        Taiizor.Add.Head('<meta property="' + Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Title + '" content="' + content + '">');
    }
}

Taiizor.Meta.OpenGraph.SetImage = function (uri) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Image)) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Image).content = uri;
    } else {
        Taiizor.Add.Head('<meta property="' + Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Image + '" content="' + uri + '">');
    }
}

Taiizor.Meta.OpenGraph.SetLocale = function (content) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Locale)) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Locale).content = content;
    } else {
        Taiizor.Add.Head('<meta property="' + Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Locale + '" content="' + content + '">');
    }
}

Taiizor.Meta.OpenGraph.SetSitename = function (content) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Sitename)) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Sitename).content = content;
    } else {
        Taiizor.Add.Head('<meta property="' + Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Sitename + '" content="' + content + '">');
    }
}

Taiizor.Meta.OpenGraph.SetDescription = function (content) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Description)) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Description).content = content;
    } else {
        Taiizor.Add.Head('<meta property="' + Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Description + '" content="' + content + '">');
    }
}

Taiizor.Meta.OpenGraph.RemoveUrl = function (execute = false) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Url) || execute) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Url).remove();
    }
}

Taiizor.Meta.OpenGraph.RemoveType = function (execute = false) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Type) || execute) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Type).remove();
    }
}

Taiizor.Meta.OpenGraph.RemoveTitle = function (execute = false) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Title) || execute) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Title).remove();
    }
}

Taiizor.Meta.OpenGraph.RemoveImage = function (execute = false) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Image) || execute) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Image).remove();
    }
}

Taiizor.Meta.OpenGraph.RemoveLocale = function (execute = false) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Locale) || execute) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Locale).remove();
    }
}

Taiizor.Meta.OpenGraph.RemoveSitename = function (execute = false) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Sitename) || execute) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Sitename).remove();
    }
}

Taiizor.Meta.OpenGraph.RemoveDescription = function (execute = false) {
    if (Taiizor.Meta.Check.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Description) || execute) {
        Taiizor.Meta.Selector.Property(Taiizor.Meta.Enum.OpenGraph + Taiizor.Meta.OpenGraph.Enum.Description).remove();
    }
}

Taiizor.Meta.Other.SetThemeColor = function (hex) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.ThemeColor)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.ThemeColor).content = hex;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Other.Enum.ThemeColor + '" content="' + hex + '">');
    }
}

Taiizor.Meta.Other.SetColorScheme = function (theme) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.ColorScheme)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.ColorScheme).content = theme;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Other.Enum.ColorScheme + '" content="' + theme + '">');
    }
}

Taiizor.Meta.Other.SetMsApplicationTileColor = function (hex) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.MsApplicationTileColor)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.MsApplicationTileColor).content = hex;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Other.Enum.MsApplicationTileColor + '" content="' + hex + '">');
    }
}

Taiizor.Meta.Other.SetMsApplicationTileImage = function (uri) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.MsApplicationTileImage)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.MsApplicationTileImage).content = uri;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Other.Enum.MsApplicationTileImage + '" content="' + uri + '">');
    }
}

Taiizor.Meta.Other.SetMsApplicationNavButtonColor = function (hex) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.MsApplicationNavButtonColor)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.MsApplicationNavButtonColor).content = hex;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Other.Enum.MsApplicationNavButtonColor + '" content="' + hex + '">');
    }
}

Taiizor.Meta.Other.SetAppleMobileWebAppCapable = function (value) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.AppleMobileWebAppCapable)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.AppleMobileWebAppCapable).content = value;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Other.Enum.AppleMobileWebAppCapable + '" content="' + value + '">');
    }
}

Taiizor.Meta.Other.SetAppleMobileWebAppStatusBarStyle = function (value) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.AppleMobileWebAppStatusBarStyle)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.AppleMobileWebAppStatusBarStyle).content = value;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Other.Enum.AppleMobileWebAppStatusBarStyle + '" content="' + value + '">');
    }
}

Taiizor.Meta.Other.RemoveThemeColor = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.ThemeColor) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.ThemeColor).remove();
    }
}

Taiizor.Meta.Other.RemoveColorScheme = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.ColorScheme) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.ColorScheme).remove();
    }
}

Taiizor.Meta.Other.RemoveMsApplicationTileColor = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.MsApplicationTileColor) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.MsApplicationTileColor).remove();
    }
}

Taiizor.Meta.Other.RemoveMsApplicationTileImage = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.MsApplicationTileImage) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.MsApplicationTileImage).remove();
    }
}

Taiizor.Meta.Other.RemoveMsApplicationNavButtonColor = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.MsApplicationNavButtonColor) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.MsApplicationNavButtonColor).remove();
    }
}

Taiizor.Meta.Other.RemoveAppleMobileWebAppCapable = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.AppleMobileWebAppCapable) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.AppleMobileWebAppCapable).remove();
    }
}

Taiizor.Meta.Other.RemoveAppleMobileWebAppStatusBarStyle = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Other.Enum.AppleMobileWebAppStatusBarStyle) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Other.Enum.AppleMobileWebAppStatusBarStyle).remove();
    }
}

Taiizor.Meta.Refresh.Set = function (content) {
    if (Taiizor.Meta.Check.Equiv(Taiizor.Meta.Enum.Refresh)) {
        Taiizor.Meta.Selector.Equiv(Taiizor.Meta.Enum.Refresh).content = content;
    } else {
        Taiizor.Add.Head('<meta http-equiv="' + Taiizor.Meta.Enum.Refresh + '" content="' + content + '">');
    }
}

Taiizor.Meta.Refresh.Remove = function (execute = false) {
    if (Taiizor.Meta.Check.Equiv(Taiizor.Meta.Enum.Refresh) || execute) {
        Taiizor.Meta.Selector.Equiv(Taiizor.Meta.Enum.Refresh).remove();
    }
}

Taiizor.Meta.Robots.Set = function (content) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Robots)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Robots).content = content;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Enum.Robots + '" content="' + content + '">');
    }
}

Taiizor.Meta.Robots.Remove = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Robots) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Robots).remove();
    }
}

Taiizor.Meta.ShortcutIcon.Set = function (path) {
    if (Taiizor.Meta.Check.Link(Taiizor.Meta.Enum.ShortcutIcon)) {
        Taiizor.Meta.Selector.Link(Taiizor.Meta.Enum.ShortcutIcon).href = path;
    } else {
        Taiizor.Add.Head('<link rel="' + Taiizor.Meta.Enum.ShortcutIcon + '" href="' + path + '">');
    }
}

Taiizor.Meta.ShortcutIcon.Remove = function (execute = false) {
    if (Taiizor.Meta.Check.Link(Taiizor.Meta.Enum.ShortcutIcon) || execute) {
        Taiizor.Meta.Selector.Link(Taiizor.Meta.Enum.ShortcutIcon).remove();
    }
}

Taiizor.Meta.Twitter.SetUrl = function (uri) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Url)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Url).content = uri;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Url + '" content="' + uri + '">');
    }
}

Taiizor.Meta.Twitter.SetCard = function (content) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Card)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Card).content = content;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Card + '" content="' + content + '">');
    }
}

Taiizor.Meta.Twitter.SetSite = function (content) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Site)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Site).content = content;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Site + '" content="' + content + '">');
    }
}

Taiizor.Meta.Twitter.SetType = function (content) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Type)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Type).content = content;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Type + '" content="' + content + '">');
    }
}

Taiizor.Meta.Twitter.SetImage = function (uri) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Image)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Image).content = uri;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Image + '" content="' + uri + '">');
    }
}

Taiizor.Meta.Twitter.SetTitle = function (content) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Title)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Title).content = content;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Title + '" content="' + content + '">');
    }
}

Taiizor.Meta.Twitter.SetDescription = function (content) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Description)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Description).content = content;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Description + '" content="' + content + '">');
    }
}

Taiizor.Meta.Twitter.RemoveUrl = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Url) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Url).remove();
    }
}

Taiizor.Meta.Twitter.RemoveCard = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Card) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Card).remove();
    }
}

Taiizor.Meta.Twitter.RemoveSite = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Site) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Site).remove();
    }
}

Taiizor.Meta.Twitter.RemoveType = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Type) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Type).remove();
    }
}

Taiizor.Meta.Twitter.RemoveImage = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Image) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Image).remove();
    }
}

Taiizor.Meta.Twitter.RemoveTitle = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Title) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Title).remove();
    }
}

Taiizor.Meta.Twitter.RemoveDescription = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Description) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Twitter + Taiizor.Meta.Twitter.Enum.Description).remove();
    }
}

Taiizor.Meta.Viewport.Set = function (content) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Viewport)) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Viewport).content = content;
    } else {
        Taiizor.Add.Head('<meta name="' + Taiizor.Meta.Enum.Viewport + '" content="' + content + '">');
    }
}

Taiizor.Meta.Viewport.Remove = function (execute = false) {
    if (Taiizor.Meta.Check(Taiizor.Meta.Enum.Viewport) || execute) {
        Taiizor.Meta.Selector(Taiizor.Meta.Enum.Viewport).remove();
    }
}



Taiizor.Add.Head = function (tagHtml) {
    document.head.appendChild(document.createRange().createContextualFragment(tagHtml));
}

Taiizor.Add.Body = function (tagHtml) {
    document.body.appendChild(document.createRange().createContextualFragment(tagHtml));
}

Taiizor.Add.Script.Head = function (textNode) {
    var element = document.createElement('script');
    element.setAttribute('type', 'text/javascript');

    element.appendChild(document.createTextNode(textNode));
    document.head.appendChild(element);
}

Taiizor.Add.Script.Body = function (textNode) {
    var element = document.createElement('script');
    element.setAttribute('type', 'text/javascript');

    element.appendChild(document.createTextNode(textNode));
    document.body.appendChild(element);
}



Taiizor.Attribute.Set = function (elementId, propertyName, propertyValue) {
    document.getElementById(elementId).setAttribute(propertyName, propertyValue);
}

Taiizor.Attribute.Get = function (elementId, propertyName) {
    return document.getElementById(elementId).getAttribute(propertyName);
}

Taiizor.Attribute.Check = function (elementId, propertyName) {
    let propertyValue = Taiizor.Attribute.Get(elementId, propertyName);
    //if (propertyValue == null || propertyValue == '') {
    if (propertyValue == null) {
        return false;
    } else {
        return true;
    }
}

Taiizor.Attribute.Remove = function (elementId, propertyName) {
    document.getElementById(elementId).removeAttribute(propertyName);
}



Taiizor.Class.Add = function (classId, className) {
    document.getElementById(classId).classList.add(className);
}

Taiizor.Class.Set = function (classId, className) {
    document.getElementById(classId).className = className;
}

Taiizor.Class.Get = function (classId) {
    return document.getElementById(classId).className;
}

Taiizor.Class.List = function (classId) {
    let classList = document.getElementById(classId).classList;
    let classArray = [];
    for (let i = 0; i < classList.length; i++) {
        classArray.push(classList[i]);
    }
    
    return classArray;
}

Taiizor.Class.Toggle = function (classId, className) {
    document.getElementById(classId).classList.toggle(className);
}

Taiizor.Class.Check = function (classId, className) {
    return document.getElementById(classId).classList.contains(className);
}

Taiizor.Class.Remove = function (classId, className) {

    document.getElementById(classId).classList.remove(className);
}



Taiizor.Cookie.Set = function (cookieName, cookieValue, exDays, path) {
    const d = new Date();
    d.setTime(d.getTime() + (exDays * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + d.toUTCString();
    let paths = 'path=' + path;
    document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';' + paths;
}

Taiizor.Cookie.Get = function (cookieName) {
    let name = cookieName + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return '';
}

Taiizor.Cookie.Check = function (cookieName) {
    let cookieValue = Taiizor.Cookie.Get(cookieName);
    if (cookieValue == null || cookieValue == '') {
        return false;
    } else {
        return true;
    }
}

Taiizor.Cookie.Delete = function (cookieName, execute = false) {
    if (Taiizor.Cookie.Check(cookieName) || execute) {
        document.cookie = cookieName + '=; Max-Age=-99999999;';
    }
}



Taiizor.Include.Font = function (path, rel) {
    var customFont = document.createElement('link');
    customFont.setAttribute('href', path);
    customFont.setAttribute('rel', rel);
    document.head.appendChild(customFont);
}

Taiizor.Include.Js = function (path) {
    var customScript = document.createElement('script');
    customScript.setAttribute('src', path);
    document.body.appendChild(customScript);
}

Taiizor.Include.Css = function (path, rel, type) {
    var customStylesheet = document.createElement('link');
    customStylesheet.setAttribute('href', path);
    customStylesheet.setAttribute('rel', rel);
    customStylesheet.setAttribute('type', type);
    document.head.appendChild(customStylesheet);
}



Taiizor.Invoke.MethodAsync = function (assemblyName, methodName, ...args) {
    if (arguments != null && arguments.length > 0) {
        return DotNet.invokeMethodAsync(assemblyName, methodName, ...args);
    } else {
        return DotNet.invokeMethodAsync(assemblyName, methodName);
    }
}

Taiizor.Invoke.Reference.MethodAsync = function (objectReference, methodName, ...args) {
    if (arguments != null && arguments.length > 0) {
        return objectReference.invokeMethodAsync(methodName, ...args);
    } else {
        return objectReference.invokeMethodAsync(methodName);
    }

    //objectReference.dispose();
}



Taiizor.Lang.Html.Set = function (languageCode) {
    document.documentElement.lang = languageCode;
}

Taiizor.Lang.Html.Get = function () {
    return document.documentElement.lang;
}

Taiizor.Lang.Html.Check = function () {
    let langValue = Taiizor.Lang.Html.Get();
    if (langValue == null || langValue == '') {
        return false;
    } else {
        return true;
    }
}

Taiizor.Lang.Head.Set = function (languageCode) {
    document.head.lang = languageCode;
}

Taiizor.Lang.Head.Get = function () {
    return document.head.lang;
}

Taiizor.Lang.Head.Check = function () {
    let langValue = Taiizor.Lang.Head.Get();
    if (langValue == null || langValue == '') {
        return false;
    } else {
        return true;
    }
}

Taiizor.Lang.Body.Get = function (languageCode) {
    document.body.lang = languageCode;
}

Taiizor.Lang.Body.Get = function () {
    return document.body.lang;
}

Taiizor.Lang.Body.Check = function () {
    let langValue = Taiizor.Lang.Body.Get();
    if (langValue == null || langValue == '') {
        return false;
    } else {
        return true;
    }
}

Taiizor.Lang.Tag.Set = function (tagHtml, languageCode) {
    document.getElementById(tagHtml).lang = languageCode;
}

Taiizor.Lang.Tag.Get = function (tagHtml) {
    try {
        return document.getElementById(tagHtml).lang;
    } catch {
        return '';
    }
}

Taiizor.Lang.Tag.Check = function (tagHtml) {
    let langValue = Taiizor.Lang.Tag.Get(tagHtml);
    if (langValue == null || langValue == '') {
        return false;
    } else {
        return true;
    }
}



Taiizor.Location.Href.Set = function (href = '') {
    window.location.href = href;
}

Taiizor.Location.Href.Get = function () {
    return window.location.href;
}

Taiizor.Location.Host.Set = function (host = '') {
    window.location.host = host;
}

Taiizor.Location.Host.Get = function () {
    return window.location.host;
}

Taiizor.Location.Hostname.Set = function (hostname = '') {
    window.location.hostname = hostname;
}

Taiizor.Location.Hostname.Get = function () {
    return window.location.hostname;
}

Taiizor.Location.Origin.Set = function (origin = '') {
    window.location.origin = origin;
}

Taiizor.Location.Origin.Get = function () {
    return window.location.origin;
}

Taiizor.Location.Pathname.Set = function (pathname = '') {
    window.location.pathname = pathname;
}

Taiizor.Location.Pathname.Get = function () {
    return window.location.pathname;
}

Taiizor.Location.Port.Set = function (port = '443') {
    window.location.port = port;
}

Taiizor.Location.Port.Get = function () {
    return window.location.port;
}

Taiizor.Location.Protocol.Set = function (protocol = 'https:') {
    window.location.protocol = protocol;
}

Taiizor.Location.Protocol.Get = function () {
    return window.location.protocol;
}

Taiizor.Location.Search.Set = function (search = '') {
    window.location.search = search;
}

Taiizor.Location.Search.Get = function () {
    return window.location.search;
}

Taiizor.Location.Hash.Set = function (hash = '') {
    window.location.hash = hash;
}

Taiizor.Location.Hash.Get = function () {
    return window.location.hash;
}



Taiizor.Redirect.Location = function (uri = '/') {
    location.href = uri;
    //window.location.href = uri;
}



Taiizor.Reload.Page = function () {
    window.location.reload();
}

Taiizor.Reload.Element = function (elementId, methodType) {
    if (methodType === true) {
        var container = document.getElementById(elementId);
        var content = container.innerHTML;
        container.innerHTML = content;
    } else {
        document.getElementById(elementId).innerHTML = document.getElementById(elementId).innerHTML;
    }
}



Taiizor.Style.Set = function (styleId, stylePair) {
    document.getElementById(styleId).style = stylePair;
}

Taiizor.Style.Add = function (styleId, styleName, styleValue) {
    document.getElementById(styleId).style.setProperty(styleName, styleValue);
}

Taiizor.Style.Toggle = function (styleId) {
    var style = document.getElementById(styleId).style.cssText;

    if (style != '') {
        Taiizor.Style.Styles[styleId] = document.getElementById(styleId).style.cssText;
        document.getElementById(styleId).style.cssText = null;
    } else if (Taiizor.Style.Styles[styleId] != null) {
        document.getElementById(styleId).style.cssText = Taiizor.Style.Styles[styleId];
        Taiizor.Style.Styles[styleId] = null;
    }
}

Taiizor.Style.Remove = function (styleId, styleName) {
    document.getElementById(styleId).style.removeProperty(styleName);
}



Taiizor.Title.Set = function (title) {
    document.title = title;
}

Taiizor.Title.Get = function () {
    return document.title;
}

Taiizor.Title.Check = function () {
    let titleValue = Taiizor.Title.Get();
    if (titleValue == null || titleValue == '') {
        return false;
    }
    else {
        return true;
    }
}