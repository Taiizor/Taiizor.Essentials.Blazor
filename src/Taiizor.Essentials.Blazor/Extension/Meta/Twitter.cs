using Taiizor.Essentials.Blazor.Enum;
using Taiizor.Essentials.Blazor.Value;

namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Twitter
    {
        public static async Task SetUrl(string Uri)
        {
            await Interop.Call("Taiizor.Meta.Twitter.SetUrl", Uri);
        }

        public static async Task SetCard(string Content)
        {
            await Interop.Call("Taiizor.Meta.Twitter.SetCard", Content);
        }

        public static async Task SetSite(string Content)
        {
            await Interop.Call("Taiizor.Meta.Twitter.SetSite", Content);
        }

        public static async Task SetType(string Content)
        {
            await Interop.Call("Taiizor.Meta.Twitter.SetType", Content);
        }

        public static async Task SetImage(string Uri)
        {
            await Interop.Call("Taiizor.Meta.Twitter.SetImage", Uri);
        }

        public static async Task SetTitle(string Content)
        {
            await Interop.Call("Taiizor.Meta.Twitter.SetTitle", Content);
        }

        public static async Task SetDescription(string Content)
        {
            await Interop.Call("Taiizor.Meta.Twitter.SetDescription", Content);
        }

        public static async ValueTask<string> GetUrl()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Url]);
        }

        public static async ValueTask<string> GetCard()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Card]);
        }

        public static async ValueTask<string> GetSite()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Site]);
        }

        public static async ValueTask<string> GetType()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Type]);
        }

        public static async ValueTask<string> GetImage()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Image]);
        }

        public static async ValueTask<string> GetTitle()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Title]);
        }

        public static async ValueTask<string> GetDescription()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Description]);
        }

        public static async ValueTask<bool> CheckUrl()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Url]);
        }

        public static async ValueTask<bool> CheckCard()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Card]);
        }

        public static async ValueTask<bool> CheckSite()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Site]);
        }

        public static async ValueTask<bool> CheckType()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Type]);
        }

        public static async ValueTask<bool> CheckImage()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Image]);
        }

        public static async ValueTask<bool> CheckTitle()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Title]);
        }

        public static async ValueTask<bool> CheckDescription()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.MetaNames[MetaEnum.Twitter] + Internal.TwitterMetaNames[TwitterMetaEnum.Description]);
        }

        public static async ValueTask<bool> CheckUrl(string Uri)
        {
            if (await CheckUrl() && await GetUrl() == Uri)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckCard(string Content)
        {
            if (await CheckCard() && await GetCard() == Content)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckSite(string Content)
        {
            if (await CheckSite() && await GetSite() == Content)
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

        public static async ValueTask<bool> CheckImage(string Uri)
        {
            if (await CheckImage() && await GetImage() == Uri)
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
            await Interop.Call("Taiizor.Meta.Twitter.RemoveUrl", Execute);
        }

        public static async Task RemoveCard(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Twitter.RemoveCard", Execute);
        }

        public static async Task RemoveSite(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Twitter.RemoveSite", Execute);
        }

        public static async Task RemoveType(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Twitter.RemoveType", Execute);
        }

        public static async Task RemoveImage(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Twitter.RemoveImage", Execute);
        }

        public static async Task RemoveTitle(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Twitter.RemoveTitle", Execute);
        }

        public static async Task RemoveDescription(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Twitter.RemoveDescription", Execute);
        }
    }
}