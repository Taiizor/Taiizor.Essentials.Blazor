using Taiizor.Essentials.Blazor.Enum;
using Taiizor.Essentials.Blazor.Value;

namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Other
    {
        public static async Task SetThemeColor(string Hex)
        {
            await Interop.Call("Taiizor.Meta.Other.SetThemeColor", Hex);
        }

        public static async Task SetColorScheme(string Theme)
        {
            await Interop.Call("Taiizor.Meta.Other.SetColorScheme", Theme);
        }

        public static async Task SetMsApplicationTileColor(string Hex)
        {
            await Interop.Call("Taiizor.Meta.Other.SetMsApplicationTileColor", Hex);
        }

        public static async Task SetMsApplicationTileImage(string Uri)
        {
            await Interop.Call("Taiizor.Meta.Other.SetMsApplicationTileImage", Uri);
        }

        public static async Task SetAppleMobileWebAppCapable(string Value)
        {
            await Interop.Call("Taiizor.Meta.Other.SetAppleMobileWebAppCapable", Value);
        }

        public static async Task SetMsApplicationNavButtonColor(string Hex)
        {
            await Interop.Call("Taiizor.Meta.Other.SetMsApplicationNavButtonColor", Hex);
        }

        public static async Task SetAppleMobileWebAppStatusBarStyle(string Value)
        {
            await Interop.Call("Taiizor.Meta.Other.SetAppleMobileWebAppStatusBarStyle", Value);
        }

        public static async ValueTask<string> GetThemeColor()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.OtherMetaNames[OtherMetaEnum.ThemeColor]);
        }

        public static async ValueTask<string> GetColorScheme()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.OtherMetaNames[OtherMetaEnum.ColorScheme]);
        }

        public static async ValueTask<string> GetMsApplicationTileColor()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.OtherMetaNames[OtherMetaEnum.MsApplicationTileColor]);
        }

        public static async ValueTask<string> GetMsApplicationTileImage()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.OtherMetaNames[OtherMetaEnum.MsApplicationTileImage]);
        }

        public static async ValueTask<string> GetAppleMobileWebAppCapable()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.OtherMetaNames[OtherMetaEnum.AppleMobileWebAppCapable]);
        }

        public static async ValueTask<string> GetMsApplicationNavButtonColor()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.OtherMetaNames[OtherMetaEnum.MsApplicationNavButtonColor]);
        }

        public static async ValueTask<string> GetAppleMobileWebAppStatusBarStyle()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.OtherMetaNames[OtherMetaEnum.AppleMobileWebAppStatusBarStyle]);
        }

        public static async ValueTask<bool> CheckThemeColor()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.OtherMetaNames[OtherMetaEnum.ThemeColor]);
        }

        public static async ValueTask<bool> CheckColorScheme()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.OtherMetaNames[OtherMetaEnum.ColorScheme]);
        }

        public static async ValueTask<bool> CheckMsApplicationTileColor()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.OtherMetaNames[OtherMetaEnum.MsApplicationTileColor]);
        }

        public static async ValueTask<bool> CheckMsApplicationTileImage()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.OtherMetaNames[OtherMetaEnum.MsApplicationTileImage]);
        }

        public static async ValueTask<bool> CheckAppleMobileWebAppCapable()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.OtherMetaNames[OtherMetaEnum.AppleMobileWebAppCapable]);
        }

        public static async ValueTask<bool> CheckMsApplicationNavButtonColor()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.OtherMetaNames[OtherMetaEnum.MsApplicationNavButtonColor]);
        }

        public static async ValueTask<bool> CheckAppleMobileWebAppStatusBarStyle()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.OtherMetaNames[OtherMetaEnum.AppleMobileWebAppStatusBarStyle]);
        }

        public static async ValueTask<bool> CheckThemeColor(string Hex)
        {
            if (await CheckThemeColor() && await GetThemeColor() == Hex)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckColorScheme(string Theme)
        {
            if (await CheckColorScheme() && await GetColorScheme() == Theme)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckMsApplicationTileColor(string Hex)
        {
            if (await CheckMsApplicationTileColor() && await GetMsApplicationTileColor() == Hex)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckMsApplicationTileImage(string Uri)
        {
            if (await CheckMsApplicationTileImage() && await GetMsApplicationTileImage() == Uri)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckAppleMobileWebAppCapable(string Value)
        {
            if (await CheckAppleMobileWebAppCapable() && await GetAppleMobileWebAppCapable() == Value)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckMsApplicationNavButtonColor(string Hex)
        {
            if (await CheckMsApplicationNavButtonColor() && await GetMsApplicationNavButtonColor() == Hex)
            {
                return true;
            }

            return false;
        }

        public static async ValueTask<bool> CheckAppleMobileWebAppStatusBarStyle(string Value)
        {
            if (await CheckAppleMobileWebAppStatusBarStyle() && await GetAppleMobileWebAppStatusBarStyle() == Value)
            {
                return true;
            }

            return false;
        }

        public static async Task RemoveThemeColor(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Other.RemoveThemeColor", Execute);
        }

        public static async Task RemoveColorScheme(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Other.RemoveColorScheme", Execute);
        }

        public static async Task RemoveMsApplicationTileColor(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Other.RemoveMsApplicationTileColor", Execute);
        }

        public static async Task RemoveMsApplicationTileImage(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Other.RemoveMsApplicationTileImage", Execute);
        }

        public static async Task RemoveAppleMobileWebAppCapable(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Other.RemoveAppleMobileWebAppCapable", Execute);
        }

        public static async Task RemoveMsApplicationNavButtonColor(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Other.RemoveMsApplicationNavButtonColor", Execute);
        }

        public static async Task RemoveAppleMobileWebAppStatusBarStyle(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Other.RemoveAppleMobileWebAppStatusBarStyle", Execute);
        }
    }
}