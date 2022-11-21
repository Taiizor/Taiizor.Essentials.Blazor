using Taiizor.Essentials.Blazor.Enum;
using Taiizor.Essentials.Blazor.Value;

namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Manifest
    {
        public static async Task Set(string Path)
        {
            await Interop.Call("Taiizor.Meta.Manifest.Set", Path);
        }

        public static async ValueTask<string> Get()
        {
            return await Interop.CallString("Taiizor.Meta.Content.Link", Internal.MetaNames[MetaEnum.Manifest]);
        }

        public static async ValueTask<bool> Check()
        {
            return await Interop.CallBool("Taiizor.Meta.Check.Link", Internal.MetaNames[MetaEnum.Manifest]);
        }

        public static async ValueTask<bool> Check(string Path)
        {
            if (await Check() && await Get() == Path)
            {
                return true;
            }

            return false;
        }

        public static async Task Remove(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Manifest.Remove", Execute);
        }
    }
}