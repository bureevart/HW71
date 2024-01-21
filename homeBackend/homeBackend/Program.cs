var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSpaStaticFiles(configuration => configuration.RootPath = "ClientApp");
var app = builder.Build();

app.UseSpaStaticFiles();
app.UseCors(builder => builder.AllowAnyOrigin());

app.UseSpa(spa => spa.Options.SourcePath = "ClientApp");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
