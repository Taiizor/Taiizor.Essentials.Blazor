using Taiizor.Essentials.Blazor.Enum;
using Taiizor.Essentials.Blazor.Value;

namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Canonical
    {
        public static async Task Set(string Uri)
        {
            await Interop.Call("Taiizor.Meta.Canonical.Set", Uri);
        }

        public static async ValueTask<string> Get()
        {
            return await Interop.CallString("Taiizor.Meta.Content.Link", Internal.MetaNames[MetaEnum.Canonical]);
        }

        public static async ValueTask<bool> Check()
        {
            return await Interop.CallBool("Taiizor.Meta.Check.Link", Internal.MetaNames[MetaEnum.Canonical]);
        }

        public static async ValueTask<bool> Check(string Uri)
        {
            if (await Check() && await Get() == Uri)
            {
                return true;
            }

            return false;
        }

        public static async Task Remove(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Canonical.Remove", Execute);
        }
    }
}