using Taiizor.Essentials.Blazor.Enum;

namespace Taiizor.Essentials.Blazor.Value
{
    internal class Internal
    {
        public static readonly string DefaultCulture = "en-GB";

        public static readonly string JavascriptFile = "Taiizor.Essentials.Blazor.Resources.Raw.{0}.Blazor.js";

        public static Dictionary<MetaEnum, string> MetaNames = new()
        {
            { MetaEnum.Author, "author" },
            { MetaEnum.Robots, "robots" },
            { MetaEnum.Charset, "charset" },
            { MetaEnum.Refresh, "refresh" },
            { MetaEnum.Twitter, "twitter:" },
            { MetaEnum.Keywords, "keywords" },
            { MetaEnum.Viewport, "viewport" },
            { MetaEnum.Manifest, "manifest" },
            { MetaEnum.Canonical, "canonical" },
            { MetaEnum.OpenGraph, "og:" },
            { MetaEnum.Description, "description" },
            { MetaEnum.ContentType, "content-type" },
            { MetaEnum.ShortcutIcon, "shortcut icon" }
        };

        public static Dictionary<TwitterMetaEnum, string> TwitterMetaNames = new()
        {
            { TwitterMetaEnum.Url, "url" },
            { TwitterMetaEnum.Card, "card" },
            { TwitterMetaEnum.Site, "site" },
            { TwitterMetaEnum.Type, "type" },
            { TwitterMetaEnum.Image, "image" },
            { TwitterMetaEnum.Title, "title" },
            { TwitterMetaEnum.Description, "description" }
        };

        public static Dictionary<OpenGraphMetaEnum, string> OpenGraphMetaNames = new()
        {
            { OpenGraphMetaEnum.Url, "url" },
            { OpenGraphMetaEnum.Type, "type" },
            { OpenGraphMetaEnum.Title, "title" },
            { OpenGraphMetaEnum.Image, "image" },
            { OpenGraphMetaEnum.Locale, "locale" },
            { OpenGraphMetaEnum.SiteName, "sitename" },
            { OpenGraphMetaEnum.Description, "description" }
        };

        public static Dictionary<JavascriptEnum, bool> JavascriptFiles = new()
        {
            { JavascriptEnum.Custom, true },
            { JavascriptEnum.Taiizor, true },
            { JavascriptEnum.AppCenter, true },
            { JavascriptEnum.Conforyon, true }
        };
    }
}