using Taiizor.Essentials.Blazor.Enum;
using Taiizor.Essentials.Blazor.Value;

namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class OpenGraph
    {
        public static async Task SetUrl(string Uri)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.SetUrl", Uri);
        }
        
        public static async Task SetType(string Content)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.SetType", Content);
        }

        public static async Task SetTitle(string Content)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.SetTitle", Content);
        }

        public static async Task SetImage(string Uri)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.SetImage", Uri);
        }

        public static async Task SetLocale(string Content)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.SetLocale", Content);
        }

        public static async Task SetSitename(string Content)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.SetSitename", Content);
        }

        public static async Task SetDescription(string Content)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.SetDescription", Content);
        }

        public static async ValueTask<string> GetUrl()
        {
            return await Interop.CallString("Taiizor.Meta.Content.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Url]);
        }

        public static async ValueTask<string> GetType()
        {
            return await Interop.CallString("Taiizor.Meta.Content.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Type]);
        }

        public static async ValueTask<string> GetTitle()
        {
            return await Interop.CallString("Taiizor.Meta.Content.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Title]);
        }

        public static async ValueTask<string> GetImage()
        {
            return await Interop.CallString("Taiizor.Meta.Content.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Image]);
        }

        public static async ValueTask<string> GetLocale()
        {
            return await Interop.CallString("Taiizor.Meta.Content.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Locale]);
        }

        public static async ValueTask<string> GetSitename()
        {
            return await Interop.CallString("Taiizor.Meta.Content.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Sitename]);
        }

        public static async ValueTask<string> GetDescription()
        {
            return await Interop.CallString("Taiizor.Meta.Content.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Description]);
        }

        public static async ValueTask<bool> CheckUrl()
        {
            return await Interop.CallBool("Taiizor.Meta.Check.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Url]);
        }

        public static async ValueTask<bool> CheckType()
        {
            return await Interop.CallBool("Taiizor.Meta.Check.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Type]);
        }

        public static async ValueTask<bool> CheckTitle()
        {
            return await Interop.CallBool("Taiizor.Meta.Check.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Title]);
        }

        public static async ValueTask<bool> CheckImage()
        {
            return await Interop.CallBool("Taiizor.Meta.Check.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Image]);
        }

        public static async ValueTask<bool> CheckLocale()
        {
            return await Interop.CallBool("Taiizor.Meta.Check.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Locale]);
        }

        public static async ValueTask<bool> CheckSitename()
        {
            return await Interop.CallBool("Taiizor.Meta.Check.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Sitename]);
        }

        public static async ValueTask<bool> CheckDescription()
        {
            return await Interop.CallBool("Taiizor.Meta.Check.Property", Internal.MetaNames[MetaEnum.ContentType] + Internal.OpenGraphMetaNames[OpenGraphMetaEnum.Description]);
        }

        public static async ValueTask<bool> CheckUrl(string Uri)
        {
            if (await CheckUrl() && await GetUrl() == Uri)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckType(string Content)
        {
            if (await CheckType() && await GetType() == Content)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckTitle(string Content)
        {
            if (await CheckTitle() && await GetTitle() == Content)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckImage(string Uri)
        {
            if (await CheckImage() && await GetImage() == Uri)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckLocale(string Content)
        {
            if (await CheckLocale() && await GetLocale() == Content)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckSitename(string Content)
        {
            if (await CheckSitename() && await GetSitename() == Content)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckDescription(string Content)
        {
            if (await CheckDescription() && await GetDescription() == Content)
            {
                return true;
            }

            return false;
        }

        public static async Task RemoveUrl(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.RemoveUrl", Execute);
        }

        public static async Task RemoveType(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.RemoveType", Execute);
        }

        public static async Task RemoveTitle(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.RemoveTitle", Execute);
        }

        public static async Task RemoveImage(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.RemoveImage", Execute);
        }

        public static async Task RemoveLocale(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.RemoveLocale", Execute);
        }

        public static async Task RemoveSitename(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.RemoveSitename", Execute);
        }

        public static async Task RemoveDescription(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.OpenGraph.RemoveDescription", Execute);
        }
    }
}