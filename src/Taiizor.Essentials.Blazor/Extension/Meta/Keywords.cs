namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Keywords
    {
        public static async Task Add(string Content)
        {
            await Interop.Call("Taiizor.Meta.Keywords.Add", Content);
        }
    }
}