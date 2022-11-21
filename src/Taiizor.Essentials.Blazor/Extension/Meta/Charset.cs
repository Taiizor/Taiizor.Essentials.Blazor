using Taiizor.Essentials.Blazor.Enum;
using Taiizor.Essentials.Blazor.Value;

namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Charset
    {
        public static async Task Set(string Encoding)
        {
            await Interop.Call("Taiizor.Meta.Charset.Set", Encoding);
        }

        public static async ValueTask<string> Get()
        {
            return await Interop.CallString("Taiizor.Meta.Content.Advanced", Internal.MetaNames[MetaEnum.Charset]);
        }

        public static async ValueTask<bool> Check()
        {
            return await Interop.CallBool("Taiizor.Meta.Check.Advanced", Internal.MetaNames[MetaEnum.Charset]);
        }

        public static async ValueTask<bool> Check(string Encoding)
        {
            if (await Check() && await Get() == Encoding)
            {
                return true;
            }

            return false;
        }

        public static async Task Remove(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Charset.Remove", Execute);
        }
    }
}