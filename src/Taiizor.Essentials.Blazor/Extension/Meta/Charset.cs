namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Charset
    {
        public static async Task Add(string Encoding)
        {
            await Interop.Call("Taiizor.Meta.Charset.Add", Encoding);
        }
    }
}