using Taiizor.Essentials.Blazor.Enum;

namespace Taiizor.Essentials.Blazor.Value
{
    internal class Internal
    {
        public static readonly string DefaultCulture = "en-GB";

        public static readonly string JavascriptFile = "Taiizor.Essentials.Blazor.Resources.Raw.{0}.Blazor.js";

        public static Dictionary<JavascriptEnum, bool> JavascriptFiles = new()
        {
            { JavascriptEnum.Custom, true },
            { JavascriptEnum.Taiizor, true },
            { JavascriptEnum.AppCenter, true },
            { JavascriptEnum.Conforyon, true }
        };
    }
}