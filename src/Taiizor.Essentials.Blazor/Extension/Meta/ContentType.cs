namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class ContentType
    {
        public static async Task Add(string Content)
        {
            await Interop.Call("Taiizor.Meta.ContentType.Add", Content);
        }
    }
}